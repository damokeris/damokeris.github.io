---
title: "自建MinIO操作指南"
excerpt_separator: "<!--more-->"
categories:
  - Blog
tags:
  - MinIO
  - Nginx
---

{% capture notice-2 %}
## 思路

* 在你的服务器上搭建MinIO服务
* 使用nginx反代,最终实现使用域名访问桶对象
* 优化:通过docker compose部署MinIO和Nginx
{% endcapture %}

<div class="notice">
  {{ notice-2 | markdownify }}
</div>

**需要注意的是:** 在任何时候,例如不知道怎么做时、遇到问题时、想了解更多操作命令时,我们都推荐你查阅: [MinIO官方文档](https://www.minio.org.cn/docs/minio/kubernetes/upstream/)
{: .notice--info}
