import { TextDocument } from "vscode";

/// 格式化路径，如果路径是以.gen结尾，则需要：
/// 1. 将路径中的.gen替换为.rs、
/// 2. 获取文件的项目路径然后与当前文件路径做分割，分割后增加src/，然后再拼接
/// 例如：/Users/shengyifei/projects/gen_ui/test/views/mod.rs 需要转为 /Users/shengyifei/projects/gen_ui/test/src/views/mod.rs
/// 对于非.gen结尾的文件路径不需要处理
export function fmt_path(source_path: string, path: string): string {
  if (path.endsWith(".gen")) {
    path = path.replace(".gen", ".rs");
    // 对path进行trim去掉前面和source_path相同的部分
    const trim_path = path.replace(source_path, "");
    path = `${source_path}/src${trim_path}`;
  }

  return path;
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
