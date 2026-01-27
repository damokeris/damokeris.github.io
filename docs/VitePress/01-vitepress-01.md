---
title: vitepress 入门
---

# 快速开始

## 安装[​](https://vitepress.dev/zh/guide/getting-started#installation)

### 前置准备[​](https://vitepress.dev/zh/guide/getting-started#prerequisites)

- [Node.js](https://nodejs.org/) 18 及以上版本。
- 通过命令行界面 （CLI） 访问 VitePress 的终端。
- 支持 [Markdown](https://en.wikipedia.org/wiki/Markdown) 语法的编辑器。
    - 推荐 [VSCode](https://code.visualstudio.com/) 及其[官方 Vue 扩展](https://marketplace.visualstudio.com/items?itemName=Vue.volar)。

VitePress 可以单独使用，也可以安装到现有项目中。在这两种情况下，都可以使用以下方式安装它：

```shell
$ npm add -D vitepress
```


### 安装向导[​](https://vitepress.dev/zh/guide/getting-started#setup-wizard)

VitePress 附带一个命令行设置向导，可以帮助你构建一个基本项目。安装后，通过运行以下命令启动向导：

npm

```shell
$ npx vitepress init
```

将需要回答几个简单的问题：

```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◆  Theme:
│  ● Default Theme (Out of the box, good-looking docs)
│  ○ Default Theme + Customization
│  ○ Custom Theme
└
```

## 文件结构[​](https://vitepress.dev/zh/guide/getting-started#file-structure)

如果正在构建一个独立的 VitePress 站点，可以在当前目录 （） 中搭建站点。但是，如果在现有项目中与其他源代码一起安装 VitePress，建议将站点搭建在嵌套目录 （例如 ） 中，以便它与项目的其余部分分开。`./``./docs`

假设选择在 中搭建 VitePress 项目，生成的文件结构应该是这样的：`./docs`

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

`docs`目录作为 VitePress 站点的项目**根目录**。目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的位置。`.vitepress`

提示

默认情况下，VitePress 将其开发服务器缓存存储在 中，并将生产构建输出存储在 中。如果使用 Git，应该将它们添加到 文件中。也可以手动[配置](https://vitepress.dev/zh/reference/site-config#outdir)这些位置。`.vitepress/cache` `.vitepress/dist` `.gitignore` 


### 配置文件[​](https://vitepress.dev/zh/guide/getting-started#the-config-file)

配置文件 （） 让你能够自定义 VitePress 站点的各个方面，最基本的选项是站点的标题和描述：`.vitepress/config.js`

```js
// .vitepress/config.js
export default {
  // 站点级选项
  title: 'VitePress',
  description: 'Just playing around.',

  themeConfig: {
    // 主题级选项
  }
}
```

还可以通过 选项配置主题的行为。有关所有配置选项的完整详细信息，请参见[配置参考](https://vitepress.dev/zh/reference/site-config)。`themeConfig`


### 源文件[​](https://vitepress.dev/zh/guide/getting-started#source-files)

`.vitepress`目录之外的 Markdown 文件被视为**源文件**。

VitePress 使用**基于文件的路由**：每个 文件将在相同的路径被编译成为 文件。例如， 将会被编译成 ，可以在生成的 VitePress 站点的根路径 进行访问。`.md``.html``index.md``index.html``/`

VitePress 还提供了生成简洁 URL、重写路径和动态生成页面的能力。这些将在[路由指南](https://vitepress.dev/zh/guide/routing)中进行介绍。

## 启动并运行[​](https://vitepress.dev/zh/guide/getting-started#up-and-running)

该工具还应该将以下 npm 脚本注入到 中：`package.json`


```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```

`docs:dev`脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它：

npm

```sh
$ npm run docs:dev
```

除了 npm 脚本，还可以直接调用 VitePress：

npm

```sh
$ npx vitepress dev docs
```

更多的命令行用法请参见 [CLI 参考](https://vitepress.dev/zh/reference/cli)。

开发服务应该会运行在 上。在浏览器中访问 URL 以查看新站点的运行情况吧！`http://localhost:5173`

