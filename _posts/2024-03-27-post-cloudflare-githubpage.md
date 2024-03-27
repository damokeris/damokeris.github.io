---
title: "使用Cloudflare托管GitHub Pages"
excerpt_separator: "<!--more-->"
categories:
  - Blog
tags:
  - GitHub
  - Cloudflare
---

> 众所周知,Cloudflare作为一个大云服务厂商，能提供免费的域名托管服务（以下简称Cloudflare，为cf）。而国内访问GitHub Pages默认服务器速度慢。所以，可以用cf加速GitHub Pages的访问速度。

* 需要注意的是，使用cdn为网站加速并不是必需的。

## 1.创建GitHub Pages

GitHub提供一个十分简单的方式让用户可以从头构建一个网站：GitHub Pages。

* 注意：每个GitHub账户可以获得一个站点。

### 1.1创建存储库

前往[GitHub](https://github.com/)并创建一个名为username.github.io的**新**公共存储库。其中，username为GitHub上的用户名。

> 以我为例，则是创建一个名为 `damokeris.github.io` 的存储库。

### 1.2初始化项目

在项目根目录下，新建一个名为 `index.html` 的文件。

并加入如下代码：
```html
"Hello World!"
```

保存，并提交/推送这个更改。

### 1.3 验证

启动浏览器并转到 `https://username.github.io` 。

显示 `Hello World!` ,说明搭建成功。

* 更多细节你可以参考： 1. [GitHub的官方文档](https://pages.github.com/) ; 2. [GitHub Pages官方文档](https://docs.github.com/en/pages)。

## 2.准备一个域名

需要通过合法的方式获得一个属于你的域名，这样别人就可以通过你的域名访问刚刚搭建的站点了。

* 注意：获得一个域名的方式不唯一。例如，你可以通过 [NameSilo](https://www.namesilo.com/) 等域名提供平台获取。


## 3.Cloudflare托管GitHub Pages

### 3.1 在Cloudflare中添加站点

#### 3.1.1根据提示添加站点，并添加DNS解析。

更多细节你可以参考： [GitHub Pages官方文档](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

#### 3.1.2修改nameserver
还需要修改域名提供商的nameserver，仅保留Cloudflare添加站点时，给出的两条nameserver。

### 3.2 GitHub Pages配置

1. 在根目录下新建一个CNAME文件，添加你的域名

例如：
```
damokeris.com
```

* GitHub官方不建议在DNS记录中使用通配符。

更多细节你可以参考： [GitHub Pages官方文档](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

2. 在 `项目` -> `设置` 中，找到 `页面` ，在 `自定义域` 中填写你的域名。