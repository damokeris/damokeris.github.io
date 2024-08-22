---
title: vitepress 自动侧边栏 插件 入门
---

# 开始[​](https://vitepress-sidebar.jooy2.com/guide/getting-started#getting-started)

**VitePress Sidebar** 是一个与 **[VitePress](https://vitepress.dev/)** 兼容的侧边栏自动生成插件。

本页面将引导您完成 VitePress 侧边栏模块的安装和使用。

## 安装[​](https://vitepress-sidebar.jooy2.com/guide/getting-started#installation)

首先，您可能需要在使用此模块之前预先配置 **[VitePress](https://vitepress.dev/)**。

建议使用 **Node.js 18.x** 或更高版本。**VitePress 侧边栏**是用 编写的。要在 中使用它，[请参阅此处的说明](https://vitepress-sidebar.jooy2.com/troubleshooting/err-require-esm)。`ESM``CommonJS`

您需要使用 [NPM](https://www.npmjs.com/package/vitepress-sidebar) 或任何其他 Node 模块包管理器来安装模块。应安装该包，因为它仅在开发人员环境中使用。使用以下命令：`devDependencies`

```shell
# via npm
$ npm i -D vitepress-sidebar

# via yarn
$ yarn add -D vitepress-sidebar

# via pnpm
$ pnpm i -D vitepress-sidebar
```


## 如何使用[​](https://vitepress-sidebar.jooy2.com/guide/getting-started#how-to-use)

您可以使用 VitePress Sidebar 的方法自动生成侧边栏。`generateSidebar`

它根据给定的根路径 （） 扫描文件夹，在 VitePress 构建它们之前找到 markdown 文件，并返回一个基于文件夹树结构生成的菜单。`documentRootPath`

首先，通过以下两种方式之一导入。`vitepress-sidebar`

### 1.使用 named-import[​](https://vitepress-sidebar.jooy2.com/guide/getting-started#_1-using-named-import)


```js
import { generateSidebar } from 'vitepress-sidebar';

const vitepressSidebarOptions = {
  /* Options... */
};

export default {
  themeConfig: {
    sidebar: generateSidebar(vitepressSidebarOptions)
  }
};
```

### 2.使用 default-import[​](https://vitepress-sidebar.jooy2.com/guide/getting-started#_2-using-default-import)


```js
import VitePressSidebar from 'vitepress-sidebar';

const vitepressSidebarOptions = {
  /* Options... */
};

export default {
  themeConfig: {
    sidebar: VitePressSidebar.generateSidebar(vitepressSidebarOptions)
  }
};
```


在文件的属性中使用该方法，该文件是 VitePress 的配置文件。VitePress 的配置文件可能具有不同的文件名或扩展名，具体取决于您的项目设置。`generateSidebar``themeConfig.sidebar``.vitepress/config.js`

要测试其输出方式，请尝试使用设置为 的选项来构建 VitePress。您应该在控制台中看到输出。`debugPrint``true`

有关 配置的更多信息，请参阅下面的 **[API](https://vitepress-sidebar.jooy2.com/guide/api)** 部分。`generateSidebar`


## 代码示例[​](https://vitepress-sidebar.jooy2.com/guide/getting-started#code-example)

JavaScript的

```
import { generateSidebar } from 'vitepress-sidebar';

export default {
  themeConfig: {
    sidebar: generateSidebar({
      /*
       * For detailed instructions, see the links below:
       * https://vitepress-sidebar.jooy2.com/guide/api
       */
      // documentRootPath: '/',
      // scanStartPath: null,
      // resolvePath: null,
      // useTitleFromFileHeading: true,
      // useTitleFromFrontmatter: true,
      // frontmatterTitleFieldName: 'title',
      // useFolderTitleFromIndexFile: false,
      // useFolderLinkFromIndexFile: false,
      // hyphenToSpace: true,
      // underscoreToSpace: true,
      // capitalizeFirst: false,
      // capitalizeEachWords: false,
      // collapsed: true,
      // collapseDepth: 2,
      // sortMenusByName: false,
      // sortMenusByFrontmatterOrder: false,
      // sortMenusByFrontmatterDate: false,
      // sortMenusOrderByDescending: false,
      // sortMenusOrderNumericallyFromTitle: false,
      // sortMenusOrderNumericallyFromLink: false,
      // frontmatterOrderDefaultValue: 0,
      // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
      // removePrefixAfterOrdering: false,
      // prefixSeparator: '.',
      // excludeFiles: ['first.md', 'secret.md'],
      // excludeFilesByFrontmatterFieldName: 'exclude',
      // excludeFolders: ['secret-folder'],
      // includeDotFiles: false,
      // includeRootIndexFile: false,
      // includeFolderIndexFile: false,
      // includeEmptyFolder: false,
      // rootGroupText: 'Contents',
      // rootGroupLink: 'https://github.com/jooy2',
      // rootGroupCollapsed: false,
      // convertSameNameSubFileToGroupIndexPage: false,
      // folderLinkNotIncludesFileName: false,
      // keepMarkdownSyntaxFromTitle: false,
      // debugPrint: false,
    })
  }
};
```


## 应用程序接口[​](https://vitepress-sidebar.jooy2.com/guide/api#api)

本页描述了 VitePress 侧边栏中的所有选项。

### `documentRootPath`[​](https://vitepress-sidebar.jooy2.com/guide/api#documentrootpath)

- 类型：`string`
- 违约：`'/'`

文档文件所在的顶级路径。缺省值为 。`/`

这是目录所在的路径，如果文档在项目根目录中所在的文件夹是 ，则此选项的值应设置为 或 。`.vitepress``/docs``docs``/docs`

发短信

```
/
├─ package.json
├─ src/
├─ docs/        <--------------- `documentRootPath` ('/docs')
│  ├─ .vitepress/        <------ VitePress config directory
│  ├─ another-directory/
│  ├─ hello.md
│  └─ index.md
└─ ...
```

---

### `useTitleFromFileHeading`[​](https://vitepress-sidebar.jooy2.com/guide/api#usetitlefromfileheading)

- 类型：`boolean`
- 违约：`false`

如果值为 ，则显示带有文件标题内容的标题。如果文件中不存在标题，则会显示 。`true``h1``.md``h1``Unknown`

默认菜单项按文件夹树顺序排序，因此请将选项设置为“如果要按更改的菜单名称重新排序”。`sortMenusByName``true`

### `useTitleFromFrontmatter`[​](https://vitepress-sidebar.jooy2.com/guide/api#usetitlefromfrontmatter)

- 类型：`boolean`
- 违约：`false`

如果值为 ，则根据文件中 in 的值显示标题。如果无法解析此值，则如果选项为 ，则将从标记中获取该值，如果该选项失败，则从文件名中获取该值。`true``title``Frontmatter``h1``useTitleFromFileHeading``true`

应位于文档的顶部，并应如下所示（值和标题之间需要空格。`Frontmatter``title:`

### `frontmatterTitleFieldName`[​](https://vitepress-sidebar.jooy2.com/guide/api#frontmattertitlefieldname)

- 类型：`string`
- 违约：`title`

根据此选项的值在文件中显示标题。如果 中不存在指定的值，则将使用默认值作为回退。`Frontmatter``Frontmatter``title`

降价

```
---
title: This is frontmatter title value.
---
```

有关详细信息，请参阅以下文章： [https://vitepress.dev/guide/frontmatter](https://vitepress.dev/guide/frontmatter)

默认菜单项按文件夹树顺序排序，因此请将选项设置为“如果要按更改的菜单名称重新排序”。`sortMenusByName``true`

## 评论📮

<DisqusComments />