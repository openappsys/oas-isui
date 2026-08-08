import '@oas-isui/i18n'
import { OASCountdown, formatDuration } from './oas-countdown.js'

if (!customElements.get('oas-countdown')) {
  customElements.define('oas-countdown', OASCountdown)
}

export { OASCountdown, formatDuration }
