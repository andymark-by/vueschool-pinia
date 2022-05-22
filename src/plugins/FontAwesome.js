import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faWindowClose, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart, faWindowClose, faTrashAlt)
export default (app) => {
  // eslint-disable-next-line vue/multi-word-component-names
  app.component('Fa', FontAwesomeIcon)
}
