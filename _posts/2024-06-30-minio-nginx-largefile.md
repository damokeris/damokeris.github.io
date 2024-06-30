---
title: "Nginx代理下 MinIO上传文件报Error: Error - File size too large 问题"
categories:
  - Blog
tags:
  - MinIO
  - Nginx
---

## 问题描述

![Image]({{ site.miniobaseurl }}/2024-06-30-001.png){: .height300px }

## 问题原因

MINIO的nginx配置需要指定上传文件的大小限制

## 解决办法

在nginx配置文件的server模块中加入

```

  # Allow any size file to be uploaded.
  # Set to a value such as 1000m; to restrict file size to a specific value
  client_max_body_size 0;

```

来取消上传大小的限制。

## 相关链接

可参考官网配置及说明：https://min.io/docs/minio/linux/integrations/setup-nginx-proxy-with-minio.html

