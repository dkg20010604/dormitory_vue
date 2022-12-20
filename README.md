# 宿舍智能管理系统 : Vue + Vue-Router + Pinia + Element-Plus + TS + ECharts + Vite

这个模板是通过vite加vue3建立的，加入了element-plus ui组件
状态管理使用Pinia（相当于全局变量，但网页刷新后会消失），访问api使用fetch，页面跳转使用vue-route

2022.15.20:完成了登陆后的导航页面框架，可自定义导航选项中的index，通过编写select事件达到自定义导航的效果  by董凯歌

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## 1.项目开始前的准备工作

```sh
npm install
```

### 2.以开发模式运行

```sh
npm run dev
```

### 3.开发完成构建服务端（默认将完成文件放到dist文件夹里）

```sh
npm run build
```

### 5.将构建好的文件放到服务器，然后运行，更多配置方式：[Vite官方文档](https://cn.vitejs.dev/guide/static-deploy.html)

```sh
npm run preview
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
