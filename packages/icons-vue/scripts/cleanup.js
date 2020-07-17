const path = require('path');
const fs = require('fs');

// 删除根目录下的 .ts 和 .js 文件
const root_path = path.resolve(__dirname, '../');
const root_lists = fs.readdirSync(root_path);
root_lists.map((list) => {
  const file = `${root_path}${path.sep}${list}`;
  if (['.js', '.ts'].includes(path.extname(file))) {
    fs.unlinkSync(file);
  }
});

// 删除 es/icons 目录下的 .ts 文件
const es_path = path.resolve(__dirname, '../es/icons');
if (fs.existsSync(es_path)) {
  const es_lists = fs.readdirSync(es_path);
  es_lists.map((list) => {
    const file = `${es_path}${path.sep}${list}`;
    if (['.ts'].includes(path.extname(file))) {
      fs.unlinkSync(file);
    }
  });
}

// 删除 lib/icons 目录下的 .ts 文件
const lib_path = path.resolve(__dirname, '../lib/icons');
if (fs.existsSync(lib_path)) {
  const lib_lists = fs.readdirSync(lib_path);
  lib_lists.map((list) => {
    const file = `${lib_path}${path.sep}${list}`;
    if (['.ts'].includes(path.extname(file))) {
      fs.unlinkSync(file);
    }
  });
}
