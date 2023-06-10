const http =require('http')

const route=require('./routes')


console.log(route.someText);
console.log('Yogesh');
console.log("testing Nodemon");


const server = http.createServer(route.handler);
server.listen(3000);