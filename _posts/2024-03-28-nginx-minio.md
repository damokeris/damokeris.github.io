---
title: "自建MinIO操作指南"
excerpt_separator: "<!--more-->"
categories:
  - Blog
tags:
  - MinIO
  - Nginx
  - jekyll
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

## 在jekyll中配置引用MinIO的图片

你可以通过 
```
{% raw %}
{{ site.[CONFIGURATION_DATA] }}
{% endraw %}
```

来自定义一个变量作为对象存储的通用前缀，例如，可以指定 
```
{% raw %}
{{ site.miniobaseurl }} 
{% endraw %}
```

1. 如何配置？

在 ` _config.yml ` 文件内，加入
```
miniobaseurl: http://your-minio-url.com/bucket-name
```

这样，在 posts(也就是文章)的任何位置都可以通过 
```
{% raw %}
 <img src="{{ site.miniobaseurl }}/image-name.jpg" alt="My Image" >
{% endraw %}
```
来引用MinIO桶内的对象。

2. 想要居中并指定大小？

你可以用如下代码引用一个图片，并自定义大小和是否居中：

```
{% raw %}
<img src="{{ site.miniobaseurl }}/image-name.jpg" alt="My Image" style="display: block; margin-left: auto; margin-right: auto; width: 200px; height: auto;">
{% endraw %}
```

 **解释:** 以上代码做了以下几点：

    display: block; 使得 <img> 元素表现为块级元素。默认情况下，<img> 是内联元素，不允许设置左右外边距。
    margin-left: auto; 和 margin-right: auto; 为图片左右两侧设置自动外边距，这将使得图片在其容器中居中。
    width: 200px; 设定图片的宽度为200像素。你可以根据需要调整这个值。
    height: auto; 保持图片的原始宽高比。
{: .notice--info}
