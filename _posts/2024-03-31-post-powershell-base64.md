---
title: "如何在PowerShell中获得base64编码的值"
categories:
  - Blog
tags:
  - powershell
---

## 实现 Base64 编码

以 Hello, World! 为例

```
[System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes('Hello, World!'))
```

## 实现 Base64 解码

同上

```
[System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String('SGVsbG8sIFdvcmxkIQ=='))
```
