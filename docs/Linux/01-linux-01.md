# Arch Linux 配置指南

## 概述

本文档提供 Arch Linux 系统安装后的基础配置指南，帮助用户快速搭建中文环境并安装常用工具。

## 1. 系统基础配置

### 1.1 软件源配置（换源）

安装完成后首先需要配置软件源以加速下载：

```bash
# 使用一键换源脚本（推荐）
bash <(curl -sSL https://linuxmirrors.cn/main.sh)

# 或使用国内镜像源脚本
bash <(curl -sSL https://gitee.com/SuperManito/LinuxMirrors/raw/main/ChangeMirrors.sh)
```

> **注意**：需要 `ROOT` 权限。请使用 `root` 账户运行本脚本，切换命令为 `sudo -i` 或 `su root`。

### 1.2 系统语言环境配置

配置系统支持中文显示：

```bash
# 1. 编辑 locale.gen 文件，取消注释中文字体支持
sudo vim /etc/locale.gen
# 找到并取消注释：zh_CN.UTF-8 UTF-8

# 2. 生成语言环境
sudo locale-gen

# 3. 设置系统语言
sudo localectl set-locale LANG=zh_CN.UTF-8

# 4. 重启系统
sudo reboot
```

## 2. 软件仓库扩展

### 2.1 Arch Linux CN 软件仓库

添加中文社区仓库以获得更多软件包：

```bash
# 编辑 pacman 配置文件
sudo vim /etc/pacman.conf
```

在文件末尾添加以下内容：

```bash
[archlinuxcn]
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```

然后导入 GPG key：

```bash
# 同步数据库并安装 keyring
sudo pacman -Sy archlinuxcn-keyring
```

## 3. 基础工具安装

### 3.1 必需工具

```bash
# 安装基础开发工具和常用软件
sudo pacman -S git curl wget vim base-devel
```

### 3.2 AUR 助手 (Yay)

Yay 允许从 Arch User Repository (AUR) 安装软件包：

```bash
# 确保已安装必要的工具
sudo pacman -S git base-devel

# 克隆 yay 源码
git clone https://aur.archlinux.org/yay-bin.git
cd yay-bin

# 构建并安装
makepkg -si
```

或者直接从 Arch Linux CN 仓库安装：

```bash
sudo pacman -S yay
```

## 4. 中文化支持

### 4.1 安装中文字体

```bash
# 安装常用中文字体
sudo pacman -S noto-fonts-cjk adobe-source-han-sans-cn-fonts \
               adobe-source-han-serif-cn-fonts wqy-microhei \
               wqy-zenhei ttf-dejavu
```

### 4.2 配置中文输入法（Fcitx5）

```bash
# 1. 安装输入法框架和中文输入法
sudo pacman -S fcitx5 fcitx5-configtool fcitx5-gtk fcitx5-qt \
               fcitx5-rime fcitx5-chinese-addons

# 2. 配置环境变量
sudo vim /etc/environment
```

添加以下内容到 `/etc/environment`：

```bash
GTK_IM_MODULE=fcitx5
QT_IM_MODULE=fcitx5
XMODIFIERS=@im=fcitx5
INPUT_METHOD=fcitx5
SDL_IM_MODULE=fcitx5
```

```bash
# 3. 重启系统使配置生效
sudo reboot

# 4. 重启后在 GNOME 设置中配置输入法
#    - 打开"设置" → "区域与语言"
#    - 点击"输入源" → "添加"
#    - 搜索"拼音" → 选择"汉语-拼音"
#    - 按 Ctrl+Space 切换输入法
```

## 5. 应用安装与配置

### 5.1 Docker 安装

```bash
# 使用一键安装脚本
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)

# 或使用国内镜像源脚本
bash <(curl -sSL https://gitee.com/SuperManito/LinuxMirrors/raw/main/DockerInstallation.sh)
```

> 脚本自动安装 `Docker Engine` 和 `Docker Compose`，支持选择软件源和镜像仓库。

### 5.2 实用工具

```bash
# 浏览器
sudo pacman -S firefox
```

### 5.3 v2rayA 代理工具

```bash
# 1. 安装 V2Ray 内核
sudo pacman -S v2ray

# 2. 安装 v2rayA（使用 yay 从 AUR 安装）
yay -S v2raya

# 3. 启用开机自启动
sudo systemctl enable v2ray
sudo systemctl enable v2raya

# 4. 启动服务
sudo systemctl start v2ray
sudo systemctl start v2raya
```

## 6. 系统优化建议

### 6.1 定期系统更新

```bash
# 更新系统所有软件包
sudo pacman -Syu

# 清理不需要的依赖包
sudo pacman -Rns $(pacman -Qdtq)
```

### 6.2 配置 Pacman 参数

编辑 `/etc/pacman.conf`，添加以下配置以提高下载速度：

```bash
# 启用并行下载（取消注释）
ParallelDownloads = 5

# 启用彩色输出（取消注释）
Color
```

## 7. 参考资源

- [Arch Linux 官方 Wiki](https://wiki.archlinux.org/)
- [Arch Linux CN 中文 Wiki](https://wiki.archlinuxcn.org/)
- [清华大学开源镜像站](https://mirrors.tuna.tsinghua.edu.cn/)

---
