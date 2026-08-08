import '@oas-isui/i18n'
import { OASPagination } from './oas-pagination.js'

if (!customElements.get('oas-pagination')) {
  customElements.define('oas-pagination', OASPagination)
}

export { OASPagination }
