import * as vscode from "vscode";
import { do_hover_provide } from "./core";
import { register_complete_providers } from "./core/complete/template";
import { GenUIFileSystemProvider } from "./core/fs_provider";
import { register_gen_complete_provider } from "./core/complete/script";
import {
  extractRustScript,
  GenScriptContentProvider,
  mapDiagnostics,
} from "./core/virtural";
import { get_compile_source } from "./core/compiler/before";
import { fmt_path, reback_path } from "./core/compiler/utils";

export function activate(context: vscode.ExtensionContext) {
  // 获取整个GenUI项目的需要编译的目录的跟路径
  const compile_source = get_compile_source();
  // 注册自定义智能提示提供程序
  const complete_providers = register_complete_providers();
  const hover_provider = vscode.languages.registerHoverProvider("gen", {
    provideHover(document, position, token) {
      return do_hover_provide(document, position);
    },
  });
  // 注册自定义文件系统提供程序
  const file_provider = new GenUIFileSystemProvider();
  const gen_complete_provider = register_gen_complete_provider();
  context.subscriptions.splice(0, 0, ...complete_providers);
  context.subscriptions.push(hover_provider);
  context.subscriptions.push(
    vscode.workspace.registerFileSystemProvider("genui", file_provider)
  );
  context.subscriptions.push(gen_complete_provider);
  // --------------------------------------------------------------------
  const contentProvider = new GenScriptContentProvider();
  contentProvider.activate(context);
  // 监听所有 .gen 文件
  vscode.workspace.onDidChangeTextDocument((e) => {
    if (e.document.languageId === "gen") {
      const script = extractRustScript(e.document);
      if (script) {
        let path = fmt_path(compile_source, e.document.uri.path);
        // 生成虚拟文档 URI
        const scriptUri = vscode.Uri.parse(`genui-script://${path}`);
        // let script_block = `{\n${script}\n}`;
        // 更新虚拟文档内容
        contentProvider.update(scriptUri, script);
      }
    }
  });

  // 监听 rust-analyzer 的诊断信息
  const diagnosticCollection =
    vscode.languages.createDiagnosticCollection("gen");
  context.subscriptions.push(diagnosticCollection);

  vscode.languages.onDidChangeDiagnostics((e) => {
    for (const uri of e.uris) {
      if (uri.scheme === "genui-script") {
        const diagnostics = vscode.languages.getDiagnostics(uri);
        const genUri = vscode.Uri.parse(reback_path(compile_source, uri.path));
        const mappedDiagnostics = mapDiagnostics(uri, genUri, diagnostics);
        diagnosticCollection.set(genUri, mappedDiagnostics);
      }
    }
  });
  vscode.languages.registerCompletionItemProvider("gen", {
    provideCompletionItems(document, position) {
      const script = extractRustScript(document);
      if (script) {
       
        let path = fmt_path(compile_source, document.uri.path);
        const scriptUri = vscode.Uri.parse(`genui-script://${path}`);
        const scriptPosition = new vscode.Position(
          position.line -
            document
              .getText()
              .substring(0, document.offsetAt(position))
              .split("\n").length +
            1,
          position.character
        );

        // let res = vscode.commands.executeCommand<vscode.CompletionList>(
        //   "vscode.executeCompletionItemProvider",
        //   scriptUri,
        //   scriptPosition
        // );
        // console.log("result" , res);
        // return res;
        // 调用 rust-analyzer 的补全功能
        return vscode.commands
          .executeCommand<vscode.CompletionList>(
            "vscode.executeCompletionItemProvider",
            scriptUri,
            scriptPosition
          )
          .then((completionList) => {
            console.log("completionList", completionList);
            // 将补全结果映射回 .gen 文件
            return completionList.items.map((item) => {
              const completionItem = new vscode.CompletionItem(
                item.label,
                item.kind
              );
              completionItem.insertText = item.insertText;
              completionItem.detail = item.detail;
              completionItem.documentation = item.documentation;
              return completionItem;
            });
          });
      }
      return [];
    },
  });

  // // 注册文档链接器
  // vscode.languages.registerDocumentLinkProvider("gen", {
  //   provideDocumentLinks(document) {
  //     const script = extractRustScript(document);
  //     if (script) {
  //       let path = fmt_path(compile_source, document.uri.path);
  //       const scriptUri = vscode.Uri.parse(
  //         `genui-script://${path}`
  //       );
  //       return [
  //         new vscode.DocumentLink(new vscode.Range(0, 0, 0, 0), scriptUri),
  //       ];
  //     }
  //     return [];
  //   },
  // });
  // // 在插件激活时添加宏定义存根
  // context.subscriptions.push(
  //   vscode.languages.registerCompletionItemProvider(
  //     "rust",
  //     {
  //       provideCompletionItems(document, position) {
  //         // 为 GenUI 宏提供智能提示
  //         return [
  //           new vscode.CompletionItem(
  //             "[prop]",
  //             vscode.CompletionItemKind.Snippet
  //           ),
  //           new vscode.CompletionItem(
  //             "[event]",
  //             vscode.CompletionItemKind.Snippet
  //           ),
  //         ];
  //       },
  //     },
  //     "#"
  //   )
  // );
}

export function deactivate() {}
