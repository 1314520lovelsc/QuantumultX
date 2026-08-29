# Quantumult X 实时策略面板 v2.1.0

这是运行在 Quantumult X HTTP Backend 中的本地运行时控制面板。

访问地址：`http://127.0.0.1:9999/qx-panel/`

## 可即时生效

- “规则分流”和“全部直连”切换。
- 有候选项的静态策略切换。
- 当前策略链路显示。
- 单项或批量节点延迟测试。

面板会隐藏自动策略、只读策略和无候选项策略，避免出现无法点击的空项目；不提供“全部代理”。

## 边界

Quantumult X 脚本 API 不允许运行时覆盖 DNS、节点参数、策略定义、规则、重写、任务、MitM、HTTP Backend 或当前活动主配置。因此 v2.1.0 不再显示这些编辑入口，也不需要 Data 配置镜像。

## 安装

1. 将 `panel/qx-panel.js` 放到 `iCloud Drive/Quantumult X/Scripts/qx-panel.js`。
2. 在当前配置的 `[http_backend]` 中加入：

```ini
qx-panel.js, tag=Quantumult X 实时策略面板, path=^/qx-panel/, enabled=true
```

3. HTTP Backend 监听 `127.0.0.1:9999`。
4. 完全断开并重新连接 Tunnel。
5. Safari 打开 `http://127.0.0.1:9999/qx-panel/`。

HTTP Backend 不要监听 `0.0.0.0`。本面板不读取、存储或上传完整配置、节点密码或 MitM 证书。
