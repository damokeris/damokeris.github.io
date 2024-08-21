import DefaultTheme from 'vitepress/theme'

//导入 Disqus评论 依赖
import DisqusComments from './components/DisqusComments.vue'

//导入 基于Git的页面历史 依赖
import {
  NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

//导入 基于Git的页面历史 UI配置 依赖
import { InjectionKey } from '@nolebase/vitepress-plugin-git-changelog/client'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(NolebaseGitChangelogPlugin),
      app.component('DisqusComments', DisqusComments),
      app.provide(InjectionKey, {
        // 配置...
        locales: {
          'en': {
              changelog: {
                title: 'Changelog',
                noData: 'No recent changes',
                lastEdited: 'This page was last edited {{daysAgo}}',
                lastEditedDateFnsLocaleName: 'enUS',
                viewFullHistory: 'View full history',
                committedOn: ' on {{date}}',
               }
              },
          'zh-CN': {
              changelog: {
              title: '页面历史',
              noData: '暂无最近变更历史',
              lastEdited: '本页面最后编辑于 {{daysAgo}}',
              lastEditedDateFnsLocaleName: 'zhCN',
              viewFullHistory: '查看完整历史',
              committedOn: '于 {{date}} 提交',
              }
          },
        }
      })
  }
}
