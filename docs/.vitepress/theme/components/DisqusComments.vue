<template>
  <div id="disqus_thread"></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const disqus_config = function () {
    this.page.url = window.location.href;
    this.page.identifier = window.location.pathname;
  };

  (function () {
    const d = document, s = d.createElement('script');
    s.src = 'https://github-xezbtjgo23.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
})
</script>
