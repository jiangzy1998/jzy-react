import path from 'path';
import fs from 'fs';

import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';

const pkgPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../dist/node_modules');

// 解析包的路径
export function resolvePkgPath(pkgName, isDist) {
  if (isDist) {
    return `${distPath}/${pkgName}`;
  } else {
    return `${pkgPath}/${pkgName}`;
  }
}

export function getPackageJSON(pkgName) {
  const path = `${resolvePkgPath(pkgName)}/package.json`;
  // 读成 str
  const str = fs.readFileSync(path, { encoding: 'utf-8' });
  // 序列化
  return JSON.parse(str);
}

// 获取基础的 plugin
export function getBaseRollupPlugins({ typescript = {} } = {}) {
  return [cjs(), ts(typescript)];
}
