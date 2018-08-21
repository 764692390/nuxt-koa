import koaRouter from 'koa-router'
import v1 from './v1'

const router = koaRouter()

router.prefix('/api/v1');
router.get('/', async (ctx , next) =>{
    ctx.body = {"msg":"this is Api","code": "0"};
});
router.use(v1.routes(), v1.allowedMethods())

export default router