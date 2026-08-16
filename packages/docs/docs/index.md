---
layout: home
title: OAS-ISUI — 框架无关的 Web Components 组件库
description: 一套组件，用于任何宿主——React / Vue / Svelte / 原生 HTML。TypeScript 全量类型、tree-shakable、light/dark 双主题、SSR + DSD。

hero:
  name: OAS-ISUI
  text: 框架无关的 Web Components UI 组件库
  tagline: 一套组件，用于任何宿主——React / Vue / Svelte / 原生 HTML。TypeScript 全量类型 · tree-shakable · light/dark 双主题 · SSR + DSD。
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/openappsys/oas-isui
---

## 安装

```bash
pnpm add @oas-isui/ui @oas-isui/theme
```

```ts
import '@oas-isui/theme'
import '@oas-isui/ui'
```

然后直接写 HTML：

```html
<oas-button type="primary">开始使用</oas-button>
```
