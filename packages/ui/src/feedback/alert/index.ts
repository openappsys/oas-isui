import '@oas-isui/i18n'
import { OASAlert } from './oas-alert.js'

if (!customElements.get('oas-alert')) {
  customElements.define('oas-alert', OASAlert)
}

export { OASAlert }
