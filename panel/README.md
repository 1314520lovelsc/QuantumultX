# Quantumult X 完整配置面板 v2.0.0

这是一个运行在 Quantumult X HTTP Backend 中的本地配置管理面板。

访问地址：

`http://127.0.0.1:9999/qx-panel/`

## 新版功能

- 显示并分类编辑 Quantumult X 的全部标准区段：
  - `[general]`
  - `[dns]`
  - `[policy]`
  - `[server_remote]`
  - `[filter_remote]`
  - `[rewrite_remote]`
  - `[server_local]`
  - `[filter_local]`
  - `[rewrite_local]`
  - `[task_local]`
  - `[http_backend]`
  - `[mitm]`
- 提供分类视图、完整源码视图与配置搜索。
- 敏感信息默认遮盖；明确点击“显示并编辑”后才能修改。
- 保存前检查重复区段、重复策略与 final 兜底规则。
- 保存时自动备份上一个版本。
- 运行策略切换即时生效。
- 只保留“规则分流”和“全部直连”，不显示“全部代理”。
- 导入当前 .conf 后，可一键完成策略重命名、单节点优化及图标地址写入。
- 支持通过 iOS 分享表单把生成的 .conf 交给 Quantumult X。

## 策略命名

| 原名称 | 新名称 |
|---|---|
| 🚀节点选择 | 出站选择 |
| 🌐海外默认 | 国际网络 |
| 🚦兜底流量 | 最终规则 |
| 🤖AI服务 | 人工智能 |
| 🛠开发服务 | 开发平台 |
| 🔎Google | 网络搜索 |
| 💬即时通讯 | 消息通信 |
| 👥社交平台 | 社交媒体 |
| 📺视频媒体 | 视频流媒体 |
| 🎵音乐服务 | 音乐流媒体 |
| ☁️云盘存储 | 云端存储 |
| 🎮游戏服务 | 游戏平台 |
| 📰新闻资讯 | 新闻媒体 |
| 💹金融交易 | 金融服务 |
| 🍎Apple | 设备服务 |
| 🪟Microsoft | 生产力服务 |
| 💚微信 | 微信服务 |
| 🛑广告拦截 | 广告拦截 |

原“⚡自动优选”会在本配置只有一个有效节点时移除；以后节点达到两个以上，可重新创建自动测速策略。

## 安装

1. 下载 `panel/qx-panel.js`。
2. 放入：
   - `iCloud Drive/Quantumult X/Scripts/`，或
   - `在我的 iPhone/Quantumult X/Scripts/`
3. 在当前配置的 `[http_backend]` 中加入：

```ini
qx-panel.js, tag=Quantumult X 配置中心, path=^/qx-panel/, enabled=true
```

4. 在 Quantumult X 的 HTTP Backend 设置中填写：
   - 监听地址：`127.0.0.1`
   - 端口：`9999`
5. 保存后完全断开并重新连接 Quantumult X Tunnel。
6. Safari 打开 `http://127.0.0.1:9999/qx-panel/`。
7. 进入“配置” → “读取文件”，选择你现在的 .conf。
8. 点击“策略升级”，面板会：
   - 写入 `iCloud Drive/Quantumult X/Data/qx-panel/profile.conf`
   - 备份为 `profile.backup.conf`
   - 重命名全部策略及其规则引用
   - 移除无候选项的自动优选
   - 给 18 个策略写入 `img-url`
9. 点击“导入 QX”，在系统分享表单中选择 Quantumult X 并确认替换。

> 第一次保存前，请先在 `iCloud Drive/Quantumult X/Data/` 下创建文件夹 `qx-panel`。

## 同步边界

Quantumult X 官方脚本 API 没有提供直接读取或覆盖当前活动主配置的接口。因此：

- 运行模式和静态策略：面板可即时修改。
- 完整配置：面板实时读取和写入 Data 中的镜像。
- 应用完整修改：仍需点击“导入 QX”并在 Quantumult X 内确认。

如果直接在 Quantumult X 编辑活动配置，Data 镜像不会自动反向同步。建议以后以面板镜像为唯一编辑源。

## 安全

- HTTP Backend 必须监听 `127.0.0.1`，不要改成 `0.0.0.0`。
- 完整个人配置可能含节点密码、MitM 证书和口令，请勿上传到公开 GitHub。
- 本仓库只保存通用面板代码和策略图标，不保存个人配置。
- 图标通过公开 raw GitHub URL 加载。
