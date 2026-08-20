# @oas-isui/nuxt

## <a id="zh"></a> 中文 | [English](#en)

OAS-ISUI 的 Nuxt 3 module —— SSR（DSD 快照）开箱即用。

### 安装

```bash
pnpm add @oas-isui/nuxt @oas-isui/ssr @oas-isui/theme
```

### 用法

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@oas-isui/nuxt'],
})
```

module 自动完成三件事：

1. **Vue isCustomElement**：`vite:extendConfig` 钩子把 `oas-*` 前缀注册进 `compilerOptions.isCustomElement`（与既有配置合并），Vue 不再把 `oas-*` 当组件解析、不再告警
2. **theme CSS 注入**：`@oas-isui/theme` 自动追加到 `nuxt.options.css`（DSD 快照引用的 `--oas-*` token 全局可用）；可用 `oasIsui: { theme: false }` 关闭或传自定义 CSS 入口
3. **SSR helper 自动导入**：`renderOasToString` / `useOasRender`（来自 `@oas-isui/nuxt/ssr`）免 import 直接调用

```ts
// server/api/ssr-demo.ts（renderOasToString 已自动导入）
export default defineEventHandler(async () => {
  const button = await renderOasToString('oas-button', { type: 'primary' }, '提交')
  const empty = await renderOasToString('oas-empty', { description: '暂无数据' }, '', {
    locale: 'zh-CN',
  })
  return `<div class="ssr-demo">${button}${empty}</div>`
})
```

也可显式导入：

```ts
import { renderOasToString } from '@oas-isui/nuxt/ssr'
```

客户端 upgrade：页面按需动态 import `@oas-isui/ui`（见文档站 SSR 指南「客户端专属」小节）。

> 进程级副作用声明：`renderOasToString` 首次调用会装载 happy-dom DOM shim 到 `globalThis`（`@oas-isui/ssr` 的既有行为，详见其声明）。

### 相关包

| 包 | 作用 |
| --- | --- |
| `@oas-isui/ssr` | 服务端 DSD 渲染引擎 |
| `@oas-isui/theme` | 设计 token（CSS 变量） |

## <a id="en"></a> [中文](#zh) | English

`@oas-isui/nuxt` — the Nuxt 3 module for OAS-ISUI. SSR (DSD snapshots) works out of the box.

### Install

```bash
pnpm add @oas-isui/nuxt @oas-isui/ssr @oas-isui/theme
```

### Usage

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@oas-isui/nuxt'],
})
```

The module does three things automatically:

1. **Vue isCustomElement**: the `vite:extendConfig` hook registers the `oas-*` prefix into `compilerOptions.isCustomElement` (merged with existing config), so Vue no longer parses `oas-*` as components or warns about them
2. **theme CSS injection**: `@oas-isui/theme` is appended to `nuxt.options.css` automatically (making `--oas-*` tokens referenced by DSD snapshots globally available); disable with `oasIsui: { theme: false }` or pass a custom CSS entry
3. **SSR helper auto-import**: `renderOasToString` / `useOasRender` (from `@oas-isui/nuxt/ssr`) are callable without an explicit import

```ts
// server/api/ssr-demo.ts（renderOasToString auto-imported）
export default defineEventHandler(async () => {
  const button = await renderOasToString('oas-button', { type: 'primary' }, '提交')
  const empty = await renderOasToString('oas-empty', { description: '暂无数据' }, '', {
    locale: 'zh-CN',
  })
  return `<div class="ssr-demo">${button}${empty}</div>`
})
```

Or import explicitly:

```ts
import { renderOasToString } from '@oas-isui/nuxt/ssr'
```

Client-side upgrade: pages dynamically `import('@oas-isui/ui')` on demand (see the "Client-only" section of the SSR guide on our docs site).

> Process-level side-effect note: the first call to `renderOasToString` mounts a happy-dom DOM shim onto `globalThis` (existing behavior of `@oas-isui/ssr`; see its declaration).

### Related packages

| Package | Purpose |
| --- | --- |
| `@oas-isui/ssr` | Server-side DSD rendering engine |
| `@oas-isui/theme` | Design tokens (CSS variables) |
