import '@oas-isui/i18n'
import { OASMarquee } from './oas-marquee.js'

if (!customElements.get('oas-marquee')) {
  customElements.define('oas-marquee', OASMarquee)
}

export { OASMarquee }
