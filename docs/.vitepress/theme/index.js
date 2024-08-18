import DefaultTheme from 'vitepress/theme'
import DisqusComments from './components/DisqusComments.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('DisqusComments', DisqusComments)
  }
}
