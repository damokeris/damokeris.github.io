import DefaultTheme from 'vitepress/theme'

//导入 自定义CSS样式
import './custom.css';

//导入 Disqus评论 依赖
import DisqusComments from './components/DisqusComments.vue'

//导入 基于Git的页面历史 依赖
import {
  NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

//导入 基于Git的页面历史 UI配置 依赖
import { InjectionKey } from '@nolebase/vitepress-plugin-git-changelog/client'

//导入 阅读增强 依赖
import { h } from 'vue'
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

//导入 mark增强
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'

// TODO 配置阅读增强的默认配置，我希望默认全屏，开聚光灯；需要注意的是，该配置可能与《基于Git的页面历史 UI配置 依赖》的自定义配置冲突

//导入 闪烁高亮当前目标标题 依赖
import {
  NolebaseHighlightTargetedHeading,
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'

import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'

export default {
  extends: DefaultTheme,
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
        },
      })
      
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 为较宽的屏幕的导航栏添加阅读增强菜单
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      // 闪烁高亮当前目标标题
      'layout-top': () => [
        h(NolebaseHighlightTargetedHeading),
      ], 
    });
  }
}
