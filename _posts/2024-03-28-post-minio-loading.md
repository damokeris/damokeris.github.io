---
title: "Nginx反代MinIO后桶对象loading不出来"
excerpt_separator: "<!--more-->"
categories:
  - Blog
tags:
  - MinIO
  - Nginx
---

## 解决方案


在nginx配置上加上websocket支持


```xml
# 添加websocket支持
proxy_http_version      1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```


* 记得重载nginx配置

<img src="{{ site.miniobaseurl }}/AuthorAvatar.jpg" alt="ImageDemo" style="display: block; margin-left: auto; margin-right: auto; width: 200px; height: 200px;">
