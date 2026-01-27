---
title: vitepress 基于Git的页面历史 插件 入门
---

# 介绍

## 一、[基于 Git 的页面历史](https://nolebase-integrations.ayaka.io/pages/zh-CN/integrations/vitepress-plugin-git-changelog/)

### 1.为什么

就如同VueUse 文档一样，能够在 VitePress 站点中添加一个基于 Git 的页面历史记录功能应该是一个很棒的功能吧？

*文档工程是一个持续改进的过程。*

大多数先进的操作系统、内容管理系统和知识库（例如，Wikipedia、Notion、Confluence、Outline）都会跟踪文件和页面的最后编辑时间戳。记录文档内容的变更与修改是至关重要的：它通过界面的方式让用户得以了解最近的更新，识别贡献者，并了解页面的演变，因此，包含一个变更日志和贡献者列表对于透明度和认可是至关重要的。

这就是 插件的作用。它是一个工具，可以生成变更日志和贡献者列表，并将它们无缝地集成到您的 VitePress 站点中。@nolebase/vitepress-plugin-git-changelog

它利用了开发人员、技术撰写人员和文档工程师的必备工具之一 Git 作为基础，以生成与之相关的「页面历史」。

无需为云上数据库，服务器设置和支付额外费用。Git 日志就是您所需要的一切。

### 2.功能

✓ Git 日志就是您所需要的一切。无需额外的服务费用、在线数据库或额外配置。

✓ 在构建时生成页面历史和贡献者章节

✓ 即时快速可靠

✓ 支持配置作者名称别名、电子邮件别名、昵称映射等自定义选项

✓ 原生与 VitePress 样式兼容

✓ 遵循 Nolebase Integrations 国际化规范标准

✓ 无障碍最佳实践


## 二、快速上手

### 1.安装

通过运行以下命令将 安装到您的项目依赖项中：`@nolebase/vitepress-plugin-git-changelog`

```shell
npm install @nolebase/vitepress-plugin-git-changelog -D
```

### 2.使用

#### 2.1 配置 Vite 插件

有两种将基于 Git 的页面历史 Vite 插件集成到您的 VitePress 项目中的方法：

（1）推荐：在 VitePress 的主要配置文件中使用 选项（通常位于 ，文件路径和扩展名可能会有所不同） `vite` `docs/.vitepress/config.ts`

（2）在 VitePress 项目的根目录中创建一个单独的 Vite 配置文件（例如 ） `vite.config.ts`

##### 2.1.1 在 VitePress 的配置文件中配置 Vite 插件

请在你的 VitePress核心配置文件中（注意不是主题配置文件，通常为 ，文件路径和拓展名也许会有区别）的根字段中添加 `docs/.vitepress/config.ts` 维特选项，并导入并配置 （数据获取）和 （小部件嵌入）插件： `GitChangelogGitChangelog` `MarkdownSection` 

```js
import { defineConfig } from 'vitepress'
import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { 
    plugins: [ 
      GitChangelog({ 
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/nolebase/integrations', 
      }), 
      GitChangelogMarkdownSection(), 
    ],
  }, 
  lang: 'zh-CN',
  title: '站点名称',
  themeConfig: {
    // rest of the options...
  }
  // rest of the options...
})
```

##### 2.1.2 在单独的 Vite 配置文件中配置 Vite 插件

如果您希望使用这种方式，请移步[官方文档](https://nolebase-integrations.ayaka.io/pages/zh-CN/integrations/vitepress-plugin-git-changelog/getting-started#%E5%9C%A8%E5%8D%95%E7%8B%AC%E7%9A%84-vite-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E9%85%8D%E7%BD%AE-vite-%E6%8F%92%E4%BB%B6)


#### 2.2 与 VitePress 主题集成

现在，让我们将基于 Git 的页面历史 UI 小部件集成到您的 VitePress 项目中。

在 VitePress 的主题配置文件（请注意，这与上面提及的配置文件并非是一个文件，主题配置文件通常位于 ，文件路径和扩展名可能会有所不同），安装 Vue 插件并使用组件： `docs/.vitepress/theme/index.ts`


```js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'
import { 
  NolebaseGitChangelogPlugin 
} from '@nolebase/vitepress-plugin-git-changelog/client'

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    // 其他配置
  },
  enhanceApp({ app }) {
    app.use(NolebaseGitChangelogPlugin)  
  },
}

export default Theme
```

#### 2.3 何时生成 Git 页面历史信息？配置部署工具与 CI/CD

##### 2.3.1 在Github Actions上进行构建

在与 Github Actions 一同使用的时候，我们只需要在 的 参数中添加 的配置就可以确保在 CI/CD 环境中获取的 Git 日志是包含全部信息的了：`actions/checkout` `with` `fetch-depth: 0`

```yaml
name: Build Docs

on:
  push:
    branches:
      - 'main'

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: 拉取代码
        uses: actions/checkout@v4
        with: 
          fetch-depth: 0

      # ... 其他的步骤
```

##### 2.3.2 在 Netlify 上进行构建

Netlify 默认情况在 CI/CD 构建期间是能获取到全部 Git 日志的。

##### 2.3.3 在 Cloudflare Pages 上进行构建

Cloudflare Pages 自带的 CI/CD 流水线功能内部是不包含全部 Git 日志信息的，唯一的解决办法是先在 GitHub Actions 或者 GitLab CI/CD Pipelines 的受控环境中进行构建，然后再通过 Cloudflare 官方的 `wrangler` 工具部署构建产物。

比如参考使用 Cloudflare 官方维护的 GitHub Actions 插件 `pages-action` 搭配在在 GitHub Actions 上进行构建所介绍的 参数配置即可实现获取 Git 日志的能力。`fetch-depth: 0`

##### 2.3.4 在 Vercel 上进行构建

Vercel 自带的 CI/CD 环境中是无法获取到全部 Git 日志信息的[1]，唯一的解决办法是先在 GitHub Actions 或者 GitLab CI/CD Pipelines 的受控环境中进行构建，然后再通过 Vercel 官方的 `vercelCLI ` 工具进行部署。

### 3.配置 Vite 插件

施工中，下次更新

### 4.配置 UI 组件

施工中，下次更新
