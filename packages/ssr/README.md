# @oas-isui/ssr

[中文](#中文) | [English](#english)

## 中文

OAS-ISUI 服务端渲染（SSR）包 —— 在 Node 环境将组件渲染为 Declarative Shadow DOM（DSD）静态快照，首屏不依赖 JS 即可呈现结构与样式，水合（upgrade）后组件接管交互。

### 安装

```bash
pnpm add @oas-isui/ssr
```

### 使用

```ts
import { renderToString } from '@oas-isui/ssr'

const html = await renderToString('oas-button', { type: 'primary' }, '提交', { locale: 'zh-CN' })
// <oas-button type="primary"><template shadowrootmode="open">…</template>提交</oas-button>
```

支持按需（单组件 / 部分 / 全部）渲染，首屏无 JS 样式闪现。详见文档站 SSR 指南。

### 相关包

| 包 | 作用 |
| --- | --- |
| `@oas-isui/ui` | 组件库主包 |
| `@oas-isui/next` | Next.js（App Router）集成 |
| `@oas-isui/nuxt` | Nuxt 3 module 集成 |

[中文](#中文) | [English](#english)

## English

`@oas-isui/ssr` — the server-side rendering (SSR) package of OAS-ISUI. Renders components to static Declarative Shadow DOM (DSD) snapshots on Node. Structure and styles are visible on first paint without JavaScript; interactivity is taken over after hydration (upgrade).

### Install

```bash
pnpm add @oas-isui/ssr
```

### Usage

```ts
import { renderToString } from '@oas-isui/ssr'

const html = await renderToString('oas-button', { type: 'primary' }, '提交', { locale: 'zh-CN' })
// <oas-button type="primary"><template shadowrootmode="open">…</template>提交</oas-button>
```

Supports on-demand rendering (single / partial / all components) with no style flash on first paint. See the SSR guide on our docs site.

### Related packages

| Package | Purpose |
| --- | --- |
| `@oas-isui/ui` | Main UI library |
| `@oas-isui/next` | Next.js (App Router) integration |
| `@oas-isui/nuxt` | Nuxt 3 module integration |
