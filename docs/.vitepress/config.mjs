import { defineConfig } from 'vitepress'

//导入 自动侧边栏组件 依赖
import { generateSidebar } from 'vitepress-sidebar'

//导入 基于Git的页面历史 依赖
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'


//定义 自动侧边栏组件 元素
const vitepressSidebarOptions = {
  /*
         * For detailed instructions, see the links below:
         * https://vitepress-sidebar.jooy2.com/guide/api
         */
  documentRootPath: '/docs',
  // scanStartPath: null,
  // resolvePath: null,
  // useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  frontmatterTitleFieldName: 'title',
  // useFolderTitleFromIndexFile: false,
  // useFolderLinkFromIndexFile: false,
  // hyphenToSpace: true,
  // underscoreToSpace: true,
  // capitalizeFirst: false,
  // capitalizeEachWords: false,
  collapsed: false,
  collapseDepth: 3,
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
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    //阅读增强 插件
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
      ],
    },
    ssr: {
      noExternal: [
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        //闪烁高亮当前的目标标题
        '@nolebase/vitepress-plugin-highlight-targeted-heading', 
      ],
    },
    //基于Git的页面历史 插件
    plugins: [
      GitChangelog({
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/damokeris/damokeris.github.io',
        // 加入Git提交者 到 贡献者 的映射关系
        mapAuthors: [ 
          {
            name: 'damokeris',
            username: 'intel-i5-13400', 
            mapByEmailAliases: ['1327118851@qq.com'] 
          },
          {
            name: 'damokeris',
            username: 'ThinkPad T14', 
            mapByEmailAliases: ['1327118851@qq.com'] 
          },
        ],
      }),
      GitChangelogMarkdownSection(),
    ],
  }, 
  lang: 'zh-CN',
  head: [["link", { rel: "icon", href: "http://bucket.damokeris.xyz/bucket-node-1/咖啡-32.svg" }]],
  title: "Hello, damokeris",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'http://bucket.damokeris.xyz/bucket-node-1/咖啡-32.svg',
    siteTitle: 'Hello World',

    outline: {
      level: [2, 6],
      label: "大纲",
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/1-markdown-examples' }
    ],

    sidebar: generateSidebar(vitepressSidebarOptions),

    footer: {
      copyright: "Copyright @ 2024-present damokeris"
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/damokeris' }
    ],
    
    lastUpdated: true
  }
})

