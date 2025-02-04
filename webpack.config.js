//@ts-check

'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/extension.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]'
  },
  externals: {
    vscode: 'commonjs vscode',
    // 排除以下模块的打包
    'vscode-languageclient': 'commonjs vscode-languageclient',
    'vscode-languageserver-protocol': 'commonjs vscode-languageserver-protocol',
    'vscode-languageserver': 'commonjs vscode-languageserver',
    'vscode-languageserver-types': 'commonjs vscode-languageserver-types'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  devtool: 'nosources-source-map'
};

