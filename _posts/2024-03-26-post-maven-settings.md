---
title: "国内maven镜像源设置"
excerpt_separator: "<!--more-->"
categories:
  - Blog
tags:
  - Maven
  - mirrors
---

## 记录 Maven 的中国镜像源

以下是阿里云提供的镜像仓库

```xml
<mirror>
      <id>aliyunmaven</id>
      <mirrorOf>*</mirrorOf>
      <name>阿里云公共仓库</name>
      <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```

以下是华为云提供的镜像仓库
```xml
<mirror>
      <id>huaweicloud</id>
      <mirrorOf>*,!HuaweiCloudSDK</mirrorOf>
      <url>https://mirrors.huaweicloud.com/repository/maven/</url>
</mirror>
```

你需要将代码块复制到 `settings.xml` 文件中。
>需要注意的是： `settings.xml` 文件默认在用户目录的 `.m2` 目录下。