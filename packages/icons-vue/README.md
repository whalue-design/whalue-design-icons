# Whalue Design Icons for Vue

[![NPM version](https://img.shields.io/npm/v/@whalue-design/icons-vue.svg?style=flat)](https://npmjs.org/package/@whalue-design/icons-vue)
[![NPM downloads](http://img.shields.io/npm/dm/@whalue-design/icons-vue.svg?style=flat)](https://npmjs.org/package/@whalue-design/icons-vue)

## Install

```bash
yarn add @whalue-design/icons-vue
```

## Basic Usage

First, you should add the icons that you need into the library.

```js
import Vue from 'vue'
import { Filter } from '@whalue-design/icons-vue';
Vue.component(Filter.name, Filter);
```

After that, you can use wvd icons in your Vue components as simply as this:

```vue
<icon-filter />
```

## Build project

```bash
npm run generate # Generate files to ./src
```
