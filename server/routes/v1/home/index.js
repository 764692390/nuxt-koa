import koaRouter from 'koa-router'
import { home } from '../../../controller'
const router = koaRouter()

router
  .get('/getList', home.getList)
  .get('/:id', home.find)
  .get('/', home.findAll)
  .post('/', home.create)
  .put('/:id', home.update)
  .patch('/:id', home.patch)
  .delete('/:id', home.remove);

export default router