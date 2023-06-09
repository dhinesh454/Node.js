
const http=require('http');


const server = http.createServer((req,res)=>{
  
    res.write('<html><title>Create server</title><body><h2>Dhinesh Welcome to Node Js</h2></body></html');
    console.log('Dhinesh');
   
})

server.listen(4000)