import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

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
