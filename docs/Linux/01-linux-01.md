# Arch Linux 配置指南

如果你安装了 Arch Linux，那么你可能需要：

## Arch Linux CN 软件仓库

[Arch Linux CN 软件仓库](https://mirrors.tuna.tsinghua.edu.cn/help/archlinuxcn/)

Arch Linux 中文社区仓库是由 Arch Linux 中文社区驱动的非官方用户仓库。包含中文用户常用软件、工具、字体/美化包等。

官方仓库地址：https://repo.archlinuxcn.org

使用方法：在 `/etc/pacman.conf` 文件末尾添加以下两行：

```bash
[archlinuxcn]
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```

之后通过以下命令安装 archlinuxcn-keyring 包导入 GPG key。

```bash
pacman -Sy archlinuxcn-keyring
```

## 基础工具安装

安装必要的工具：

```bash
sudo pacman -S git curl wget vim base-devel
```

### 安装 Yay（AUR 助手）

Yay 是一个适用于 Arch Linux 的命令行软件，主要用于帮助用户从 Arch User Repository (AUR) 构建和安装软件包。它可以：

1. 自动解决软件包间的依赖关系
2. 动态地搜索、编译和构建包
3. 安装与管理 AUR 中的包（yay 的命令与 pacman 基本一致，例如 `yay -S` 对应 `pacman -S`，但 yay 能同时处理官方仓库和 AUR）

#### 方法一：从 AUR 编译安装

首先确保已安装 base-devel 和 git：

```bash
pacman -S git base-devel
```

克隆 yay 源码（有两个选项）：

**选项 A：克隆 yay（可能受网络限制）**
```bash
git clone https://aur.archlinux.org/yay.git
cd yay
```

**选项 B：克隆 yay-bin（推荐中国用户使用）**
```bash
git clone https://aur.archlinux.org/yay-bin.git
cd yay-bin
```

然后构建并安装：

```bash
makepkg -si
```

如果您想一次完成所有操作（使用 yay 版本）：

```bash
pacman -S git base-devel && git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

#### 方法二：从 archlinuxcn 仓库安装

如果不想编译安装，也可以添加 [archlinuxcn](https://wiki.archlinuxcn.org/wiki/Arch_Linux_%E4%B8%AD%E6%96%87%E7%A4%BE%E5%8C%BA%E4%BB%93%E5%BA%93) 仓库来安装 yay (CNRepo)。

## 换源脚本

### 一键执行命令

```bash
bash <(curl -sSL https://linuxmirrors.cn/main.sh)
```

或

```bash
# 实时同步、无延迟，国内网络环境下推荐使用
bash <(curl -sSL https://gitee.com/SuperManito/LinuxMirrors/raw/main/ChangeMirrors.sh)
```

> **需要 `ROOT` 权限**
>
> 请使用 `root` 账户运行本脚本，切换命令为 `sudo -i` 或 `su root`，不同系统使用的命令不同。另外注意不要通过 `sudo` 直接运行一键命令，例如 `sudo bash <(xxx)`。

## Docker 安装与换源

### 一键执行命令

```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

或

```bash
# 实时同步、无延迟，国内网络环境下推荐使用
bash <(curl -sSL https://gitee.com/SuperManito/LinuxMirrors/raw/main/DockerInstallation.sh)
```

> 集成安装 [`Docker Engine`](https://docs.docker.com/engine) 和 [`Docker Compose`](https://docs.docker.com/compose)，支持选择或更换软件源（Docker 软件仓库）以及镜像仓库、安装指定版本、重装等功能，支持 ARM 架构。
>
> 脚本参考[官方文档](https://docs.docker.com/engine/install)使用系统包管理工具进行安装，不存在兼容性、安全性等问题，可安装的版本由 Docker CE 仓库决定。

## 系统语言环境配置（显示中文）

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

## 安装中文字体

```bash
# 推荐安装 Noto 字体（包含中文字体）
sudo pacman -S noto-fonts-cjk adobe-source-han-sans-cn-fonts adobe-source-han-serif-cn-fonts wqy-microhei wqy-zenhei ttf-dejavu
```

## 配置中文输入法（推荐 Fcitx5 方案）

```bash
# 1. 安装输入法框架和中文输入法
sudo pacman -S fcitx5 fcitx5-configtool fcitx5-gtk fcitx5-qt fcitx5-rime fcitx5-chinese-addons

# 2. 配置环境变量
sudo vim /etc/environment
# 添加以下内容：
GTK_IM_MODULE=fcitx5
QT_IM_MODULE=fcitx5
XMODIFIERS="@im=fcitx5"
INPUT_METHOD=fcitx5
SDL_IM_MODULE=fcitx5

# 3. 重启系统
sudo reboot

# 4. 配置 GNOME 输入法
#    - 打开"设置" → "区域与语言"
#    - 点击"输入源" → "添加"
#    - 搜索"拼音" → 选择"汉语-拼音"
#    - 按 Ctrl+Space 切换输入法
```

## 实用配置

```bash
sudo pacman -S firefox          # 浏览器
sudo pacman -S gnome-tweaks     # GNOME 设置工具
```
