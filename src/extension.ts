import * as vscode from "vscode";
import { do_hover_provide } from "./core";
import { register_complete_providers } from "./core/complete/template";
import { register_gen_complete_provider } from "./core/complete/script";
// import { get_compile_source } from "./core/compiler/before";
import { GenUIWorkspace } from "./core/compiler/shadow/project";

export function activate(context: vscode.ExtensionContext) {
  // const compile_source = get_compile_source();
  // 注册自定义智能提示提供程序
  const complete_providers = register_complete_providers();
  const hover_provider = vscode.languages.registerHoverProvider("gen", {
    provideHover(document, position, token) {
      return do_hover_provide(document, position);
    },
  });
  const gen_complete_provider = register_gen_complete_provider();
  context.subscriptions.splice(0, 0, ...complete_providers);
  context.subscriptions.push(hover_provider);
  context.subscriptions.push(gen_complete_provider);
  // --------------------------------------------------------------------
  const gen_workspace = new GenUIWorkspace();

  gen_workspace.run();

  // const fileProvider = new GenUIFileSystemProvider();
  // context.subscriptions.push(
  //   vscode.workspace.registerFileSystemProvider("genui", fileProvider)
  // );

  // // 创建诊断集合
  // const diagnosticCollection =
  //   vscode.languages.createDiagnosticCollection("genui");
  // context.subscriptions.push(diagnosticCollection);

  // // 监听 .gen 文件的变化
  // vscode.workspace.onDidChangeTextDocument(async (e) => {
  //   if (e.document.languageId === "gen" && e.document.uri.scheme === "file") {
  //     // 查找所有 .gen 文件
  //     const files = await vscode.workspace.findFiles("**/*.gen");

  //     // 读取所有文件内容
  //     const genFileContents = await Promise.all(
  //       files.map(async (file) => {
  //         const content = await vscode.workspace.fs.readFile(file);
  //         return {
  //           path: file.path,
  //           content: new TextDecoder().decode(content), // 将 Uint8Array 转换为 string
  //         };
  //       })
  //     );

  //     // 更新虚拟文件系统
  //     fileProvider.updateVirtualFiles(genFileContents);
  //   }
  // });

  // // 监听 rust-analyzer 的诊断信息
  // vscode.languages.onDidChangeDiagnostics(async (e) => {
  //   for (const uri of e.uris) {
     
  //     if (uri.scheme === "file" && (uri.fsPath.endsWith(".rs") || uri.fsPath.endsWith(".gen"))) {
  //       // console.log("url: ---", uri);
  //       // 获取虚拟.rs文件的诊断信息
  //       const diagnostics = vscode.languages.getDiagnostics(uri);
  //       // 将诊断信息映射回.gen文件中
  //       const genUri = vscode.Uri.parse(reback_path(compile_source, uri.path));
  //       // console.log("genUri", genUri);
  //       const mappedDiagnostics = mapDiagnostics(uri, genUri, diagnostics);
  //       // 更新诊断集合
  //       diagnosticCollection.set(genUri, mappedDiagnostics);
  //     }
  //   }
  // });

  // vscode.workspace.onDidCloseTextDocument((doc) => {
  //   if (doc.languageId === "gen") {
  //     diagnosticCollection.delete(doc.uri);
  //   }
  // });

  // vscode.workspace.onDidDeleteFiles((e) => {
  //   for (const uri of e.files) {
  //     if (uri.fsPath.endsWith(".gen")) {
  //       diagnosticCollection.delete(uri);
  //     }
  //   }
  // });
}

export function deactivate() {}
