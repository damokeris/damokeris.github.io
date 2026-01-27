# Arch Linux 配置指南

安装完 Arch Linux 后，建议进行如下设置：

## 换源

安装必要的工具：

```bash
sudo pacman -S git curl wget
```

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

---

## Docker 安装与换源脚本

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

---

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

---

## 安装中文字体

```bash
# 推荐安装 Noto 字体（包含中文字体）
sudo pacman -S noto-fonts-cjk adobe-source-han-sans-cn-fonts adobe-source-han-serif-cn-fonts wqy-microhei wqy-zenhei ttf-dejavu
```

---

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

---

## 实用配置

```bash
sudo pacman -S firefox          # 浏览器
sudo pacman -S gnome-tweaks     # GNOME 设置工具
```

