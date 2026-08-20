# @oas-isui/icons

## <a id="zh"></a> 中文 | [English](#en)

OAS-ISUI 图标包 —— 纯 SVG 图标集合，tree-shakable，按需导出图标路径。与 `oas-icon` 组件搭配使用渲染任意图标。

### 安装

```bash
pnpm add @oas-isui/icons
```

### 使用

```ts
import { alertCirclePath } from '@oas-isui/icons'
```

配合 `oas-icon` 组件使用：

```html
<oas-icon path="alertCirclePath" size="24"></oas-icon>
```

每个图标以路径导出（默认 24×24 viewBox），主题色由 CSS 继承，支持 light / dark 自动适配。

### 相关包

| 包 | 作用 |
| --- | --- |
| `@oas-isui/ui` | 组件库主包（含 `oas-icon` 组件） |

## <a id="en"></a> [中文](#zh) | English

`@oas-isui/icons` — the icon package of OAS-ISUI. A pure SVG icon collection, tree-shakable, exporting icon paths on demand. Pair with the `oas-icon` component to render any icon.

### Install

```bash
pnpm add @oas-isui/icons
```

### Usage

```ts
import { alertCirclePath } from '@oas-isui/icons'
```

Rendered via the `oas-icon` component:

```html
<oas-icon path="alertCirclePath" size="24"></oas-icon>
```

Each icon is exported as a path (24×24 viewBox by default). Colors inherit from CSS, with automatic light / dark adaptation.

### Related packages

| Package | Purpose |
| --- | --- |
| `@oas-isui/ui` | Main UI library (includes the `oas-icon` component) |
