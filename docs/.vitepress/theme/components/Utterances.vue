<template>
  <div id="utterances-comments"></div>
</template>

<script>
export default {
  name: 'Utterances',
  mounted() {
    this.initUtterances();
  },
  watch: {
    '$route.path': {
      handler: function() {
        setTimeout(() => {
          this.initUtterances();
        }, 500);
      }
    }
  },
  methods: {
    initUtterances() {
      // 清除现有的评论容器
      const container = document.getElementById('utterances-comments');
      if (container) {
        container.innerHTML = '';
      }

      // 创建新的 script 元素
      const script = document.createElement('script');
      script.src = 'https://utteranc.es/client.js';
      script.setAttribute('repo', 'damokeris/damokeris.github.io');
      script.setAttribute('issue-term', 'pathname');
      script.setAttribute('label', 'comment');
      script.setAttribute('theme', 'github-light');
      script.crossOrigin = 'anonymous';
      script.async = true;

      // 添加到容器
      const commentsContainer = document.getElementById('utterances-comments');
      if (commentsContainer) {
        commentsContainer.appendChild(script);
      }
    }
  }
}
</script>

<style scoped>
#utterances-comments {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>