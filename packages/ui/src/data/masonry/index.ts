import '@oas-isui/i18n'
import { OASMasonry } from './oas-masonry.js'

if (!customElements.get('oas-masonry')) {
  customElements.define('oas-masonry', OASMasonry)
}

export { OASMasonry }
