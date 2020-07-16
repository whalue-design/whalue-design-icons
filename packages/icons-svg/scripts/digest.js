'use strict';

const path = require('path');
const fs = require('fs');
const globby = require('globby');

const list = [];

for (const theme of ['filled', 'outlined', 'twotone']) {
  globby.sync(`../svg/${theme}/*.svg`, { cwd: __dirname }).forEach((p) => {
    const parsed = path.parse(p);
    const { name } = parsed;
    list.push({ name, theme });
  });
}

fs.writeFileSync(
  path.resolve(__dirname, './digest.txt'),
  list
    .map(({ name, theme }) => `${name}-${theme}`)
    .sort()
    .join('\n'),
  'utf8',
);

// Generate example
let md_table = '| Name | Filled | Outlined | TwoTone |\n| :-: | :-: | :-: | :-: |',
  current_name = '',
  current_theme = '';
const lists = fs.readFileSync(path.resolve(__dirname, './digest.txt'), 'utf8').split('\n');
lists.map((list) => {
  const end = list.lastIndexOf('-');
  const name = list.substr(0, end);
  const theme = list.slice(end + 1);
  if (current_name === name) {
    if (current_theme === 'filled' && theme === 'twotone') {
      md_table += ' - |';
    }
  } else {
    if (current_theme === 'filled') {
      md_table += ' - | - |';
    } else if (current_theme === 'outlined') {
      md_table += ' - |';
    }

    md_table += `\n| ${name} |`;
    if (theme === 'outlined') {
      md_table += ' - |';
    } else if (theme === 'twotone') {
      md_table += ' - | - |';
    }
  }
  md_table += ` ![${name}-${theme}](./svg/${theme}/${name}.svg) |`;
  current_name = name;
  current_theme = theme;
});
if (current_theme === 'filled') {
  md_table += ' - | - |';
} else if (current_theme === 'outlined') {
  md_table += ' - |';
}
fs.writeFileSync(path.resolve(__dirname, '../EXAMPLE.md'), md_table, 'utf8');
