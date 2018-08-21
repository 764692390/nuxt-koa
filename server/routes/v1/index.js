import koaRouter from 'koa-router';
import home from './home';

const router = koaRouter();

router
    .use('/home', home.routes())

export default router;