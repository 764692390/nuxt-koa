import { Home } from '../../service'
import BaseController from '../base-controller'

class Controller extends BaseController {
  constructor() {
    super(Home)
  }
}

export default new Controller