import { workspace } from "vscode";

export function register_icon_provider(){
    // 设置图标主题
    workspace.getConfiguration().update("workbench.iconTheme", "gen-icon-theme", true);
    
}