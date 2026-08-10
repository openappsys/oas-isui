# Getting Started

## Three-line setup (CDN)

```html
<link rel="stylesheet" href="https://unpkg.com/@oas-isui/theme@1/index.css" />
<script type="module">
  import '@oas-isui/ui'
</script>
<oas-button type="primary">Hello OAS-ISUI</oas-button>
```

## Install (npm / pnpm / yarn)

```bash
pnpm add @oas-isui/ui @oas-isui/theme
```

## Import

Full import (auto-registers all components):

```ts
import '@oas-isui/theme'
import '@oas-isui/ui'
```

Import a single component on demand:

```ts
import '@oas-isui/theme'
import '@oas-isui/ui/basic/button'
```

Use directly in React / Vue:

```tsx
// React
<oas-button type="primary" onOasClick={() => console.log('clicked')}>
  Button
</oas-button>
```

```vue
<!-- Vue -->
<oas-button type="primary" @oas-click="onClick">Button</oas-button>
```

No wrappers are needed in any of the three environments (React/Vue/vanilla);
events are bridged through `oas-*` CustomEvents.

## Theme switching

```html
<html data-theme="dark">
  <!-- switches to dark theme -->
</html>
```

Three built-in themes: `light` / `dark` / `high-contrast`. See the
[Theming guide](./theming) for customization.

## SSR

For server-side rendering, refer to the [SSR strategy](./ssr): side-effect
imports of the component library should only run on the client.
