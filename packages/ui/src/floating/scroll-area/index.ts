import '@oas-isui/i18n'
import { OASScrollArea } from './oas-scroll-area.js'

if (!customElements.get('oas-scroll-area')) {
  customElements.define('oas-scroll-area', OASScrollArea)
}

export { OASScrollArea }
