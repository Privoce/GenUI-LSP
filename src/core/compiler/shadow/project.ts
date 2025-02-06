import { existsSync, readFileSync, writeFileSync } from "fs";
import * as path from "path";
import { FileSystemWatcher, Uri, workspace, WorkspaceFolder } from "vscode";
import { GenUIToml, Ract } from "../ract";
import { get_compile_source } from "../before";
import {
  copy_dir_local,
  copy_file,
  download_from_github,
  fmt_path,
  remove_tmp,
} from "../utils";

let toml_strify: any;
(async () => {
  toml_strify = (await import("smol-toml")).stringify;
})();

type GenUIProject = {
  rootPath: string;
  tmpPath: string;
  watcher?: FileSystemWatcher;
};

/// 处理GenUI项目工作区
/// 当前仅支持单项目
/// 因为rust-analyzer无法分析非标准rust项目，而GenUI的项目是从rust标准项目中改造出来的，
/// 所以我需要借助vscode来构建一个真实的标准的能够被rust-analyzer解析的真实项目，因为GenUI的总项目是个标准的rust workspace，
/// 所以我可以让vscode创建一个tmp目录放在总workspace下作为子项目，这个tmp是当前使用者开发时映射的GenUI源子项目，
/// 作为映射源，当使用者开启GenUI项目时会自动产生这个tmp项目，并且在开发时这个tmp项目在使用者修改GenUI项目的某个文件后马上生成对应的rs文件
/// （如果是.gen文件就需要提取<script>标签包裹的内容，如果不是.gen文件直接复制过去就行）
/// 让rust-analyzer去分析这个tmp项目然后生成对应的诊断信息，然后返回给当前使用者正在编写的.gen文件中，
/// 这样就可以借用rust-analyzer来处理GenUI项目
export class GenUIWorkspace {
  /// ract 编译器配置文件，通过解析.ract文件获取编译配置信息
  public ract?: Ract;
  /// 进行映射的rust项目的路径
  public shadow_path?: string;
  /// 项目workspace路径
  public workspace_path: string;
  /// 源项目路径
  public source_path?: string;
  public lib_mods: string[] = [];
  public is_compile: boolean = false;

  /// 构造函数
  /// 1. 读取.ract文件获取ract配置
  /// 2. 生成shadow_path，source_path，path
  constructor() {
    // 获取当前工作区的根目录 -----------------------------------------------------------
    let workspace_path = workspace.workspaceFolders?.[0].uri.path;
    if (!workspace_path) {
      throw new Error("找不到工作区!");
    }
    this.workspace_path = workspace_path;
    // 读取.ract文件 ------------------------------------------------------------------
    let ract_path = path.join(workspace_path, ".ract");
    // 检查是否有`.ract`文件 -----------------------------------------------------------
    if (!existsSync(ract_path)) {
      return;
    } else {
      // 读取`.ract`文件，由于它是toml格式的所以使用toml的库进行解析
      const ract_content = readFileSync(ract_path, "utf-8");
      // 解析`.ract`文件为Ract类型 -----------------------------------------------------
      this.ract = require("toml").parse(ract_content);
      if (this.ract!.target !== "gen_ui") {
        throw new Error(
          `不支持的编译目标, 请检查.ract文件, 目前只支持gen_ui, 您当前的编译目标是: ${
            this.ract!.target
          }`
        );
      }
      this.source_path = `${workspace_path}/${this.ract!.members[0].source}`;
      this.shadow_path = `${workspace_path}/tmp`;
      this.is_compile = true;
    }
  }

  /// 执行
  public run() {
    this.init_shadow_project();
    workspace.findFiles(`${this.source_name()}/**/*.gen`).then((paths) => {
      paths.forEach((uri) => {
        this.push_mod(uri.path);
      });

      this.lib_rs();
    });
  }

  /// 初始化构建映射的项目
  private init_shadow_project() {
    if (!this.is_compile) {
      return;
    }
    // 检查是否已经有tmp项目 -----------------------------------------------------------
    if (!existsSync(this.shadow_path!)) {
      // 调用cargo new创建shadow项目 ---------------------------------------------------
      let exec_cmd = "cargo new --bin tmp";
      let exec = require("child_process").exec;
      exec(
        exec_cmd,
        { cwd: this.workspace_path },
        (err: any, stdout: any, stderr: any) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(stdout);
          console.log(stderr);
        }
      );
    }

    // 检查workspace中的Cargo.toml文件是否有tmp项目 --------------------------------------
    let cargo_toml_path = path.join(this.workspace_path, "Cargo.toml");
    if (!existsSync(cargo_toml_path)) {
      return;
    } else {
      // 读取Cargo.toml文件并获取[workspace]下的members
      let cargo_toml_content = readFileSync(cargo_toml_path, "utf-8");
      let cargo_toml = require("toml").parse(cargo_toml_content);
      let members: string[] = cargo_toml.workspace.members;
      if (!members.includes("tmp")) {
        // 添加tmp然后写回
        members.push("tmp");
        let member_str = members
          .map((i) => {
            return `"${i}"`;
          })
          .join(", ");

        let toml_str = `[workspace]\nmembers = [${member_str}]`;
        // 写回
        writeFileSync(cargo_toml_path, toml_str);
      }
    }
    // 读取源项目中的内容并写入到shadow项目中 -------------------------------------------
    this.sync_all_to_shadow();
  }

  /// 同步shadow项目，用于初始化时进行大范围同步
  private async sync_all_to_shadow() {
    // 同步所有rust脚本
    await this.sync_all_rust_gen();
    // 同步gen_ui.toml文件并处理依赖
    let dependencies = await this.sync_gen_ui_toml();
    // 同步Cargo.toml文件除了名字之外的所有内容并添加依赖
    await this.update_cargo_toml_and_sync(dependencies);
  }

  /// 同步所有rust脚本
  private async sync_all_rust_gen() {
    // 递归读取源项目下所有后缀为.gen的文件和.rs文件
    let gen_file_paths = workspace.findFiles(`${this.source_name()}/**/*.gen`);
    let rs_file_paths = workspace.findFiles(`${this.source_name()}/**/*.rs`);
    let gen_file_paths_str: string[] = [];
    // 同步所有.gen文件
    gen_file_paths.then((paths) => {
      paths.forEach((uri) => {
        this.push_mod(uri.path);
        this.sync_gen_file(uri);
      });
    });
    // 同步所有.rs文件
    rs_file_paths.then((paths) => {
      paths.forEach((uri) => {
        this.sync_rs_file(uri.path);
      });
    });
  }

  private push_mod(path: string) {
    path = path.replace(this.source_path!, "");
    let start = path.indexOf("/");
    let end = path.indexOf("/", start + 1);
    let mod_path = path.slice(start + 1, end);
    if (!this.lib_mods.includes(mod_path)) {
      this.lib_mods.push(mod_path);
    }
  }

  /// 同步单个.gen文件
  /// 对于.gen文件，我们需要将文件中`<script></script>`包裹的rust代码提取出来并写入到shadow项目中
  private async sync_gen_file(uri: Uri) {
    let shadow_path = fmt_path(
      this.workspace_path,
      this.source_name(),
      uri.path
    );
    let script_content = readFileSync(uri.path);
    let script_regex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    let match = script_regex.exec(script_content.toString());
    let rust_content = match ? match[1].trim() : null;
    if (!rust_content) {
      return;
    }
    workspace.fs.writeFile(Uri.file(shadow_path), Buffer.from(rust_content));
  }

  /// 同步单个.rs文件
  /// 对于.rs文件，需要将其内容提取出来并写入到shadow项目中
  private sync_rs_file(path: string) {
    // 如果是src/lib.rs文件，需要特殊处理
    let lib_path = require("path").join(this.source_path!, "src", "lib.rs");
    if (path !== lib_path) {
      let shadow_path = fmt_path(this.workspace_path, this.source_name(), path);
      workspace.fs.copy(Uri.file(path), Uri.file(shadow_path), {
        overwrite: true,
      });
    }
  }

  /// /Users/shengyifei/projects/gen_ui/lsp_plugin_vscode/test_gen_plugin/hello/views/home.gen
  /// /Users/shengyifei/projects/gen_ui/lsp_plugin_vscode/test_gen_plugin/hello/views/mod.gen
  /// 对于这些文件，去除prefix后， /views/home.gen和/views/mod.gen，然后获取第一个`/ /`之间的内容即可
  private lib_rs() {
    console.log(this.lib_mods);
    let path = require("path").join(this.source_path!, "src", "lib.rs");
    let lib_path = require("path").join(this.shadow_path, "src", "lib.rs");
    // 如果path存在，那么获取path的内容
    let content = "";
    if (existsSync(path)) {
      content = readFileSync(path, "utf-8");
    }

    this.lib_mods.forEach((mod) => {
      content += `pub mod ${mod};\n`;
    });
    workspace.fs.writeFile(Uri.file(lib_path), Buffer.from(content));
  }

  public source_name(): string {
    return this.ract!.members[0].source;
  }

  /// 更新了source这边的Cargo.toml文件，需要同步到shadow项目中
  private async update_cargo_toml_and_sync(dependencies?: Object) {
    let cargo_toml_path = path.join(this.source_path!, "Cargo.toml");
    let cargo_toml_content = await require("fs-extra").readFile(
      cargo_toml_path,
      "utf-8"
    );
    let cargo_toml_obj = require("toml").parse(cargo_toml_content);
    cargo_toml_obj.package.name = "tmp";
    if (dependencies) {
      cargo_toml_obj.dependencies = Object.assign(
        cargo_toml_obj.dependencies,
        dependencies
      );
    }
    let cargo_toml_str = toml_strify(cargo_toml_obj);
    let shadow_cargo_toml_path = path.join(this.shadow_path!, "Cargo.toml");
    await require("fs-extra").writeFile(shadow_cargo_toml_path, cargo_toml_str);
  }

  private async sync_gen_ui_toml(): Promise<Object> {
    let gen_ui_toml_path = path.join(this.source_path!, "gen_ui.toml");
    if (!existsSync(gen_ui_toml_path)) {
      return [];
    }

    let gen_ui_toml_content = readFileSync(gen_ui_toml_path, "utf-8");
    let gen_ui_toml_obj = require("toml").parse(gen_ui_toml_content);
    let compile_target = gen_ui_toml_obj.compiler.target;
    let plugins = gen_ui_toml_obj.plugins;

    // 使用 Promise.all 并行处理所有插件
    const pluginPromises = Object.entries(plugins).map(async ([key, value]) => {
      let token_toml_path = path.join(
        path.join(this.source_path!, value as string),
        "token.toml"
      );

      if (!existsSync(token_toml_path)) {
        throw new Error(`插件${key}的token.toml文件不存在`);
      }

      let token_content = readFileSync(token_toml_path, "utf-8");
      let token_obj = require("toml").parse(token_content);

      if (token_obj.plugin.repo.git !== undefined) {
        await download_from_github(this.shadow_path!, key);
      } else {
        await Promise.resolve(
          copy_dir_local(this.shadow_path!, token_obj.plugin.repo)
        );
      }
    });

    // 等待所有插件处理完成
    await Promise.all(pluginPromises);
    await remove_tmp(this.shadow_path!);

    // 处理依赖
    return gen_ui_toml_obj[compile_target].dependencies;
  }
}
