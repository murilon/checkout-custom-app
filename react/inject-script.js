import { canUseDOM } from 'exenv'
import PropTypes from 'prop-types'

const SCRIPT_URL = 'https://brunomoreira.vteximg.com.br/arquivos/script-xpto.js'

const renderRoot = (_, { getSettings }) => {
  // eslint-disable-next-line no-unused-vars
  const settings = getSettings()

  if (canUseDOM) {
    const wa = document.createElement('script')

    wa.type = 'text/javascript'
    wa.async = true
    wa.src = SCRIPT_URL

    const s = document.getElementsByTagName('head')[0]

    s.appendChild(wa)
  }

  return null
}

renderRoot.contextTypes = {
  getSettings: PropTypes.func,
}

export default renderRoot
