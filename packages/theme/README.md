# @oas-isui/theme

[中文](#中文) | [English](#english)

## 中文

OAS-ISUI 设计 token 包 —— CSS 变量体系：light / dark / high-contrast 三套主题色板、间距、字号、圆角等。通过 `html[data-theme="dark"]` 切换主题。

### 安装

```bash
pnpm add @oas-isui/theme
```

### 使用

CDN 引入：

```html
<link rel="stylesheet" href="https://unpkg.com/@oas-isui/theme@2/index.css" />
```

包管理方式：

```ts
import '@oas-isui/theme'
```

切换主题只需修改根节点属性：

```js
document.documentElement.dataset.theme = 'dark' // light | dark | high-contrast
```

### 相关包

| 包 | 作用 |
| --- | --- |
| `@oas-isui/ui` | 组件库主包（基于本包 token 构建） |

[中文](#中文) | [English](#english)

## English

`@oas-isui/theme` — the design token package of OAS-ISUI. A CSS variable system: light / dark / high-contrast color palettes, spacing, font sizes, radii, etc. Switch themes via `html[data-theme="dark"]`.

### Install

```bash
pnpm add @oas-isui/theme
```

### Usage

CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/@oas-isui/theme@2/index.css" />
```

Via a package manager:

```ts
import '@oas-isui/theme'
```

Switch themes by setting the root attribute:

```js
document.documentElement.dataset.theme = 'dark' // light | dark | high-contrast
```

### Related packages

| Package | Purpose |
| --- | --- |
| `@oas-isui/ui` | Main UI library (built on this package's tokens) |
