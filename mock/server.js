var app = require('koa')();
var router = require('koa-router')();
var koaBody = require('koa-body')();
var cors = require('koa-cors');
    
router.get('/', function *(next) {
    this.body = 'hello koa !'
});

router.get('/api', function *(next) {
    this.body = 'hello api  -> test data'
});
router.get('/api/1', function *(next) {
    this.body = 'hello api/num test data 1'
});
router.get('/api/2', function *(next) {
    this.body = {
        a: 1,
        b: '123'
    }
});

router.post('/api/post', koaBody, function *(next) {
    console.log(this.request.body)
    this.body = JSON.stringify(this.request.body)
});

var options = {
    origin: true
};

app.use(router.routes())
   .use(router.allowedMethods())
   .use(cors(options));

app.listen(3000);
