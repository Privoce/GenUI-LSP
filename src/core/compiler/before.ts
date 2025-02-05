import { workspace } from "vscode";
import {Member, Ract} from "./ract";

/**
 * 在整个插件运行之前执行
 * 获取当前目录中的`.ract`文件，这个文件是`Ract`的配置文件，从中可以获取到哪一个子项目是编译目标
 * 返回值是编译目标的目录路径
 */
export function get_compile_source(): string{
    const fs = require('fs');
    const path = require('path');
    const toml = require('toml');
    // 获取当前工作区的根目录
    const current_dir = workspace.workspaceFolders?.[0].uri.path;
    // 检查是否有`.ract`文件
    const ract_file = path.join(current_dir, '.ract');
    if(!fs.existsSync(ract_file)){
        throw new Error('找不到.ract文件, 请检查是否在正确的目录下');
    }else{
        // 读取`.ract`文件，由于它是toml格式的所以使用toml的库进行解析
        const ract_content = fs.readFileSync(ract_file, 'utf-8');
        // 解析`.ract`文件为Ract类型
        const ract: Ract = toml.parse(ract_content);
        if (ract.target !== "gen_ui"){
            throw new Error(`不支持的编译目标, 请检查.ract文件, 目前只支持gen_ui, 您当前的编译目标是: ${ract.target}`);
        }
        // 当前Ract的编译目标就是第一个子项目
        const compile_target = ract.members[0].source;
        return `${current_dir}/${compile_target}`;
    }
}