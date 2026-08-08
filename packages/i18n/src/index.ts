/**
 * @oas-isui/i18n 主入口 —— registry + 类型。
 *
 * 语言包按需单独引入（tree-shakable）：
 *   import zhCN from '@oas-isui/i18n/zh-CN'
 *   import en from '@oas-isui/i18n/en'
 */
export {
  registerLocale,
  setLocale,
  getLocale,
  getLocaleName,
  t,
  onLocaleChange,
} from './registry.js'
export type { Locale, LocaleKey, LocaleMessages, LocaleParams } from './types.js'
