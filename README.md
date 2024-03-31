# How to create content locally without installing the dependencies required by Jekyll, such as Ruby.

运行如下命令

```shell
docker run --rm --volume="${PWD}:/srv/jekyll" -p 4000:4000 jekyll/jekyll jekyll serve --force_polling
```

## 解释：
- `--rm`: 容器停止后自动清理容器实例。
- `--volume="${PWD}:/srv/jekyll"`: 将当前目录挂载到容器的 `/srv/jekyll`。
- `-p 4000:4000`: 将容器的 4000 端口映射到宿主机的 4000 端口。
- `jekyll serve`: 运行 Jekyll 服务器。
- `--force_polling`: 强制 Jekyll 轮询文件系统变化，实现查看实时编辑效果。


# Minimal Mistakes remote theme starter

Click [**Use this template**](https://github.com/mmistakes/mm-github-pages-starter/generate) button above for the quickest method of getting started with the [Minimal Mistakes Jekyll theme](https://github.com/mmistakes/minimal-mistakes).

Contains basic configuration to get you a site with:

- Sample posts.
- Sample top navigation.
- Sample author sidebar with social links.
- Sample footer links.
- Paginated home page.
- Archive pages for posts grouped by year, category, and tag.
- Sample about page.
- Sample 404 page.
- Site wide search.

Replace sample content with your own and [configure as necessary](https://mmistakes.github.io/minimal-mistakes/docs/configuration/).

---

## Troubleshooting

If you have a question about using Jekyll, start a discussion on the [Jekyll Forum](https://talk.jekyllrb.com/) or [StackOverflow](https://stackoverflow.com/questions/tagged/jekyll). Other resources:

- [Ruby 101](https://jekyllrb.com/docs/ruby-101/)
- [Setting up a Jekyll site with GitHub Pages](https://jekyllrb.com/docs/github-pages/)
- [Configuring GitHub Metadata](https://github.com/jekyll/github-metadata/blob/master/docs/configuration.md#configuration) to work properly when developing locally and avoid `No GitHub API authentication could be found. Some fields may be missing or have incorrect data.` warnings.
