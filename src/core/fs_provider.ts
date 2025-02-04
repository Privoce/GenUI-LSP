import * as vscode from 'vscode';

export class GenUIFileSystemProvider implements vscode.FileSystemProvider {
  private readonly _onDidChangeFile = new vscode.EventEmitter<vscode.FileChangeEvent[]>();
  readonly onDidChangeFile = this._onDidChangeFile.event;

  private readonly _fileData = new Map<string, Uint8Array>();

  watch(uri: vscode.Uri, options: { recursive: boolean; excludes: string[] }): vscode.Disposable {
    // 不需要实现文件监听
    return new vscode.Disposable(() => {});
  }

  stat(uri: vscode.Uri): vscode.FileStat {
    const fileData = this._fileData.get(uri.toString());
    if (fileData) {
      return {
        type: vscode.FileType.File,
        ctime: Date.now(),
        mtime: Date.now(),
        size: fileData.length,
      };
    }
    throw vscode.FileSystemError.FileNotFound(uri);
  }

  readFile(uri: vscode.Uri): Uint8Array {
    const fileData = this._fileData.get(uri.toString());
    if (fileData) {
      return fileData;
    }
    throw vscode.FileSystemError.FileNotFound(uri);
  }

  writeFile(uri: vscode.Uri, content: Uint8Array, options: { create: boolean; overwrite: boolean }): void {
    this._fileData.set(uri.toString(), content);
    this._onDidChangeFile.fire([{ type: vscode.FileChangeType.Changed, uri }]);
  }

  readDirectory(uri: vscode.Uri): [string, vscode.FileType][] {
    throw vscode.FileSystemError.NoPermissions(uri);
  }

  createDirectory(uri: vscode.Uri): void {
    throw vscode.FileSystemError.NoPermissions(uri);
  }

  delete(uri: vscode.Uri, options: { recursive: boolean }): void {
    this._fileData.delete(uri.toString());
    this._onDidChangeFile.fire([{ type: vscode.FileChangeType.Deleted, uri }]);
  }

  rename(oldUri: vscode.Uri, newUri: vscode.Uri, options: { overwrite: boolean }): void {
    const fileData = this._fileData.get(oldUri.toString());
    if (fileData) {
      this._fileData.set(newUri.toString(), fileData);
      this._fileData.delete(oldUri.toString());
      this._onDidChangeFile.fire([
        { type: vscode.FileChangeType.Deleted, uri: oldUri },
        { type: vscode.FileChangeType.Created, uri: newUri },
      ]);
    } else {
      throw vscode.FileSystemError.FileNotFound(oldUri);
    }
  }
}