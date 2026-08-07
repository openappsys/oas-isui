import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import '@oas-isui/theme'
import './style.css'
import DemoBlock from './components/DemoBlock.vue'

if (!import.meta.env.SSR) {
  // Web Components 需在浏览器环境注册；SSR 构建阶段跳过
  import('@oas-isui/ui')
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DemoBlock', DemoBlock)
  },
} satisfies Theme
