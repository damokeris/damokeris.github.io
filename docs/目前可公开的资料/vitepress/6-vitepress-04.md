---
title: vitepress 自动侧边栏 插件 带缩进的多级侧边栏
---

# 介绍

在多级侧边栏中，菜单显示时每一层都有缩进。但是，默认情况下，VitePress 从第二层开始缩进。例如

![doc-multi-level-docs-before](http://bucket.damokeris.xyz/bucket-node-1/doc-multi-level-docs-before.png)

上面是 的子文件，但它似乎位于同一层次结构中。`directory-level-2` `directory-level-1`

这不是 VitePress 侧边栏的问题，因此要修复它，您需要通过 [VitePress 的自定义 CSS](https://vitepress.dev/guide/extending-default-theme#customizing-css) 自定义现有主题的样式。

在目录中创建一个目录，以覆盖现有样式所需的样式。然后，在目录中，创建一个文件（如果您使用的是 Typescript，请使用 而不是 ）和一个文件。

`theme` `.vitepress` `theme` `index.js` `index.ts` `index.js` `custom.css`

```
/
├─ package.json
├─ src/
├─ docs/
│  ├─ .vitepress/
│  │  └─ theme/            <------------ Add this
│  │     ├─ custom.css     <------------ Add this
│  │     └─ index.js       <------------ Add this
│  ├─ example.md
│  └─ index.md
└─ ...
```

然后将以下内容添加到文件中：`index.js`

```js
import DefaultTheme from 'vitepress/theme';
import './custom.css';

export default DefaultTheme;
```

接下来，将以下内容添加到文件中：`custom.css`
```css
.group:has([role='button']) .VPSidebarItem.level-0 .items {
  padding-left: 16px !important;
  border-left: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  transition: background-color 0.25s;
}
```

现在启动 VitePress 服务器。这样可以更轻松地查看子内容所在的组的第一级的层次结构。

![doc-multi-level-docs-after.png](http://bucket.damokeris.xyz/bucket-node-1/doc-multi-level-docs-after.png)

需要注意的是，您在此处看到的垂直分隔线仅使用 CSS 创建;它应该是使用名为 的 CSS 类创建的，因此您应该知道，将来构建动态页面时可能不会选择垂直分隔线。`div` `indicator`

## 评论📮

<DisqusComments />