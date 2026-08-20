# @oas-isui/ui

## <a id="zh"></a> 中文 | [English](#en)

OAS-ISUI 组件库主包 —— 框架无关的 Web Components UI 组件库（Custom Elements + Shadow DOM）。

- TypeScript 全量类型，tree-shakable
- light / dark 双主题（CSS 变量 token，无需重新引入 JS）
- SSR + Declarative Shadow DOM（DSD）快照支持
- 框架无关 i18n（zh-CN / en）
- MIT OR Apache-2.0 双许可

### 安装

```bash
pnpm add @oas-isui/ui @oas-isui/theme
```

### 快速开始

CDN 一键引入：

```html
<link rel="stylesheet" href="https://unpkg.com/@oas-isui/theme@2/index.css" />
<script type="module" src="https://unpkg.com/@oas-isui/ui@2/dist/cdn.js"></script>

<oas-button type="primary">Hello OAS-ISUI</oas-button>
```

包管理方式：

```html
<link rel="stylesheet" href="https://unpkg.com/@oas-isui/theme@2/index.css" />
<script type="module">
  import '@oas-isui/ui'
</script>

<oas-button type="primary">Hello OAS-ISUI</oas-button>
```

React / Vue / Svelte / 原生 HTML 均可直接使用，事件通过 `oas-*` CustomEvent 桥接。

### 按需引入

```ts
import '@oas-isui/ui/basic/button'
```

### SSR

服务端渲染（DSD 快照）见 `@oas-isui/ssr` 包与文档站 SSR 指南。

### 相关包

| 包 | 作用 |
| --- | --- |
| `@oas-isui/theme` | 设计 token（light / dark / high-contrast） |
| `@oas-isui/core` | 组件基类 `OASElement` |
| `@oas-isui/icons` | SVG 图标集合 |
| `@oas-isui/ssr` | 服务端 DSD 渲染 |
| `@oas-isui/next` | Next.js（App Router）集成 |
| `@oas-isui/nuxt` | Nuxt 3 module 集成 |
| `@oas-isui/i18n` | 框架无关 locale registry |

### 文档

完整组件文档与 demo：[文档站](https://oasisui.dev) · [GitHub](https://github.com/openappsys/oas-isui)

## <a id="en"></a> [中文](#zh) | English

`@oas-isui/ui` — the main package of OAS-ISUI, a framework-agnostic Web Components UI library (Custom Elements + Shadow DOM).

- Fully typed TypeScript, tree-shakable
- light / dark themes (CSS variable tokens, no extra JS needed)
- SSR + Declarative Shadow DOM (DSD) snapshot support
- Framework-agnostic i18n (zh-CN / en)
- Dual-licensed MIT OR Apache-2.0

### Install

```bash
pnpm add @oas-isui/ui @oas-isui/theme
```

### Quick start

CDN, one-liner:

```html
<link rel="stylesheet" href="https://unpkg.com/@oas-isui/theme@2/index.css" />
<script type="module" src="https://unpkg.com/@oas-isui/ui@2/dist/cdn.js"></script>

<oas-button type="primary">Hello OAS-ISUI</oas-button>
```

Via a package manager:

```html
<link rel="stylesheet" href="https://unpkg.com/@oas-isui/theme@2/index.css" />
<script type="module">
  import '@oas-isui/ui'
</script>

<oas-button type="primary">Hello OAS-ISUI</oas-button>
```

Works directly with React / Vue / Svelte / vanilla HTML. Events are bridged via `oas-*` CustomEvents.

### On-demand import

```ts
import '@oas-isui/ui/basic/button'
```

### SSR

Server-side rendering (DSD snapshots) is provided by `@oas-isui/ssr`. See the SSR guide on our docs site.

### Related packages

| Package | Purpose |
| --- | --- |
| `@oas-isui/theme` | Design tokens (light / dark / high-contrast) |
| `@oas-isui/core` | Base class `OASElement` |
| `@oas-isui/icons` | SVG icon collection |
| `@oas-isui/ssr` | Server-side DSD rendering |
| `@oas-isui/next` | Next.js (App Router) integration |
| `@oas-isui/nuxt` | Nuxt 3 module integration |
| `@oas-isui/i18n` | Framework-agnostic locale registry |

### Documentation

Full component docs and demos: [Docs site](https://oasisui.dev) · [GitHub](https://github.com/openappsys/oas-isui)
