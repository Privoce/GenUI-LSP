// import * as vscode from "vscode";
// import { ext_rust_script_str, fmt_path } from "./compiler/utils";
// import { get_compile_source } from "./compiler/before";

// export class GenUIFileSystemProvider implements vscode.FileSystemProvider {
//   private source_path = get_compile_source();

//   private _onDidChangeFile = new vscode.EventEmitter<
//     vscode.FileChangeEvent[]
//   >();
//   private files = new Map<string, Uint8Array>();

//   onDidChangeFile: vscode.Event<vscode.FileChangeEvent[]> =
//     this._onDidChangeFile.event;

//   watch(
//     uri: vscode.Uri,
//     options: { recursive: boolean; excludes: string[] }
//   ): vscode.Disposable {
//     return new vscode.Disposable(() => {});
//   }

//   stat(uri: vscode.Uri): vscode.FileStat {
//     const file = this.files.get(uri.toString());
//     if (file) {
//       return {
//         type: vscode.FileType.File,
//         ctime: Date.now(),
//         mtime: Date.now(),
//         size: file.length,
//       };
//     }
//     throw vscode.FileSystemError.FileNotFound();
//   }

//   readDirectory(uri: vscode.Uri): [string, vscode.FileType][] {
//     throw vscode.FileSystemError.NoPermissions();
//   }

//   createDirectory(uri: vscode.Uri): void {
//     throw vscode.FileSystemError.NoPermissions();
//   }

//   readFile(uri: vscode.Uri): Uint8Array {
//     const file = this.files.get(uri.toString());
//     if (file) {
//       return file;
//     }
//     throw vscode.FileSystemError.FileNotFound();
//   }

//   writeFile(
//     uri: vscode.Uri,
//     content: Uint8Array,
//     options: { create: boolean; overwrite: boolean }
//   ): void {
//     this.files.set(uri.toString(), content);
//     this._onDidChangeFile.fire([{ type: vscode.FileChangeType.Changed, uri }]);
//   }

//   delete(uri: vscode.Uri, options: { recursive: boolean }): void {
//     this.files.delete(uri.toString());
//     this._onDidChangeFile.fire([{ type: vscode.FileChangeType.Deleted, uri }]);
//   }

//   rename(
//     oldUri: vscode.Uri,
//     newUri: vscode.Uri,
//     options: { overwrite: boolean }
//   ): void {
//     const file = this.files.get(oldUri.toString());
//     if (file) {
//       this.files.set(newUri.toString(), file);
//       this.files.delete(oldUri.toString());
//       this._onDidChangeFile.fire([
//         { type: vscode.FileChangeType.Deleted, uri: oldUri },
//         { type: vscode.FileChangeType.Created, uri: newUri },
//       ]);
//     }
//   }

//   // 动态生成 lib.rs
//   generateLibRs(genFiles: { path: string; content: string }[]): string {
//     return lib_root(this.source_path, genFiles).join("");
//   }

//   // 更新虚拟文件系统
//   updateVirtualFiles(genFiles: { path: string; content: string }[]) {
//     // 生成 lib.rs
//     const libRsContent = this.generateLibRs(genFiles);
//     const libRsUri = vscode.Uri.parse(`file://${this.source_path}/src/lib.rs`);
//     this.writeFile(libRsUri, new TextEncoder().encode(libRsContent), {
//       create: true,
//       overwrite: true,
//     });

//     // 更新 .rs 文件
//     for (const genFile of genFiles) {
//       const scriptContent = ext_rust_script_str(genFile.content);
//       if (scriptContent) {
//         let path = fmt_path(this.source_path, genFile.path);
//         const rsUri = vscode.Uri.parse(
//           `file://${path}`
//         );
//         this.writeFile(rsUri, new TextEncoder().encode(scriptContent), {
//           create: true,
//           overwrite: true,
//         });
//       }
//     }
//   }
// }


// export function lib_root(
//   prefix: string,
//   genFiles: { path: string; content: string }[]
// ): string[] {
//   let paths: string[] = [];

//   genFiles.forEach((f) => {
//     let path = f.path.replace(prefix, "");
//     let start = path.indexOf("/");
//     let end = path.indexOf("/", start + 1);
//     let mod_path = path.slice(start + 1, end);
//     let mod = `pub mod ${mod_path};\n`;
//     if (!paths.includes(mod)) {
//       paths.push(mod);
//     }
//   });

//   return paths;
// }
