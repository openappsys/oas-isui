# @oas-isui/i18n

OAS-ISUI 国际化包 —— 框架无关的 locale registry（`setLocale` / `registerLocale` / `t`），内置 zh-CN / en 语言包，tree-shakable。

```ts
import zhCN from '@oas-isui/i18n/zh-CN'
import { registerLocale, setLocale } from '@oas-isui/i18n'

registerLocale(zhCN)
setLocale('zh-CN')
```

组件内置文案（空态、确认按钮、校验消息等）随 locale 全局切换；`oas-config-provider` 支持就近注入。
