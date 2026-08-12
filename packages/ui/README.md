# @oas-isui/ui

OAS-ISUI 组件库主包 —— 框架无关的 Web Components UI 组件库（Custom Elements + Shadow DOM）。

## 安装

```bash
pnpm add @oas-isui/ui @oas-isui/theme
```

## 使用

```html
<link rel="stylesheet" href="https://unpkg.com/@oas-isui/theme@1/index.css" />
<script type="module">
  import '@oas-isui/ui'
</script>

<oas-button type="primary">Hello OAS-ISUI</oas-button>
```

React / Vue / Svelte / 原生 HTML 均可直接使用，事件通过 `oas-*` CustomEvent 桥接。

## 按需引入

```ts
import '@oas-isui/ui/basic/button'
```

## SSR

服务端渲染（DSD 快照）见 `@oas-isui/ssr` 包与文档站 SSR 指南。

## 文档

完整组件文档与 demo：[文档站](https://oas-isui.dev)（建设中）。
