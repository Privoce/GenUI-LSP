import { existsSync, mkdirSync, writeSync } from "fs";
import { TextDocument, Uri, workspace } from "vscode";
import { promisify } from "util";
import { exec as execCallback } from "child_process";

const exec = promisify(execCallback);
/// 格式化路径，如果路径是以.gen结尾，则需要：
/// 1. 将路径中的.gen替换为.rs、
/// 2. 获取文件的项目路径然后与当前文件路径做分割，分割后增加src/，然后再拼接
/// 例如：/Users/shengyifei/projects/gen_ui/test/views/mod.gen 需要转为 /Users/shengyifei/projects/gen_ui/tmp/src/views/mod.rs
/// 对于非.gen结尾的文件路径不需要处理
export function fmt_path(
  source_path: string,
  source_name: string,
  path: string
): string {
  let prefix = require("path").join(source_path, source_name);
  // 对path进行trim去掉前面和source_path相同的部分
  const trim_path = path.replace(prefix, "");
  if (path.endsWith(".gen")) {
    path = path.replace(".gen", ".rs");
    return require("path").join(source_path, "tmp", "src", trim_path);
  } else {
    return require("path").join(source_path, "tmp", trim_path);
  }
}

/// 将路径中的.rs替换为.gen并将之前的src/去掉
export function reback_path(source_path: string, path: string): string {
  if (path.endsWith(".rs")) {
    path = path.replace(".rs", ".gen");
    // 对path进行trim去掉前面和source_path相同的部分
    const trim_path = path.replace(source_path, "");
    path = `${source_path}${trim_path}`;
    path = path.replace("/src", "");
  }

  return path;
}

export function ext_rust_script(document: TextDocument): string | null {
  const text = document.getText();
  return ext_rust_script_str(text);
}

export function ext_rust_script_str(document: string): string | null {
  const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
  const match = scriptRegex.exec(document);
  return match ? match[1].trim() : null;
}

// 从本地将from_path下的所有文件复制到to_path中，from和to都是dir
export function copy_dir_local(to_path: string, from_path: string) {
  try {
    // fs-extra 的 copySync 方法可以递归复制整个目录
    // 获得父目录
    let from_father = require("path").dirname(from_path);
    require("fs-extra").copySync(from_father, to_path);
    return true;
  } catch (err) {
    console.error("复制文件时发生错误:", err);
    return false;
  }
}

/// 删除某个目录下的.tmp目录
export async function remove_tmp(path: string) {
  let tmp_path = require("path").join(path, "tmp");
  if (existsSync(tmp_path)) {
    require("fs-extra").removeSync(tmp_path);
  }
}

/// 调用git从github下载文件
export async function download_from_github(
  path: string,
  plugin: string
): Promise<void> {
  try {
    // 1. 创建临时目录
    const tmp_path = require("path").join(path, "tmp");
    await require("fs-extra").ensureDir(tmp_path);
    console.log(`临时目录创建成功: ${tmp_path}`);

    // 2. 初始化 git 仓库
    await exec("git init", { cwd: tmp_path });
    console.log("Git 仓库初始化成功");

    // 3. 添加远程仓库
    await exec(
      'git remote add origin "https://github.com/Privoce/genui_plugins.git"',
      { cwd: tmp_path }
    );

    // 4. 配置 sparse-checkout
    await exec("git config core.sparseCheckout true", { cwd: tmp_path });

    // 5. 设置 sparse-checkout 路径
    const sparse_checkout_path = require("path").join(
      tmp_path,
      ".git",
      "info",
      "sparse-checkout"
    );
    await require("fs-extra").writeFile(
      sparse_checkout_path,
      `projects/${plugin}/*`
    );

    // 6. 拉取代码
    await exec("git pull origin main", { cwd: tmp_path });

    // 7. 复制文件
    const to_src = require("path").join(path, "src");
    const from_path = require("path").join(tmp_path, "projects");
    await require("fs-extra").copy(from_path, to_src);
    console.log("插件下载完成");
  } catch (error) {
    console.error("下载过程中发生错误:", error);
    throw error;
  }
}

/// 将一个文件从from复制到to
export function copy_file(from: string, to: string) {
  workspace.fs.copy(Uri.file(from), Uri.file(to));
}
