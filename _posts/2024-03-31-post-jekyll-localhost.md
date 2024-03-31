---
title: "如何在不安装Jekyll以及它所需的依赖，例如Ruby的情况下进行编写并浏览效果"
categories:
  - Blog
tags:
  - Jekyll
  - localhost
---

**问题:** Jekyll 是一个可以用来快速构建静态站点的工具。但是这种情况很不方便：那就是我几乎没有 Ruby 环境以及配套的开发工具，然而 Jekyll 需要。配置环境总是乏味枯燥的，尤其是当编辑 Jekyll 的环境频繁变动时。因此，答案呼之欲出，[Docker](https://www.docker.com/) 是一种办法用来避免环境配置带来的麻烦。
{: .notice--info}

## 解决办法

你可以在 Jekyll 坐在文件夹打开终端并使用如下命令：

```shell
docker run --rm --volume="${PWD}:/srv/jekyll" -p 4000:4000 jekyll/jekyll jekyll serve --force_polling
```

### 解释

- `--rm`: 容器停止后自动清理容器实例。
- `--volume="${PWD}:/srv/jekyll"`: 将当前目录挂载到容器的 `/srv/jekyll`。
- `-p 4000:4000`: 将容器的 4000 端口映射到宿主机的 4000 端口。
- `jekyll serve`: 运行 Jekyll 服务器。
- `--force_polling`: 强制 Jekyll 轮询文件系统变化，实现查看实时编辑效果。

## 更多参考

你可以查看 Jekyll 提供的[官方手册](https://github.com/envygeeks/jekyll-docker/blob/master/README.md)来获取更多信息。
