const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    console.log(ctx);
    ctx.body = 'Hello World1';
});

app.listen(3000);