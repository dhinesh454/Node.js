
const http=require('http');


const server = http.createServer((req,res)=>{
  const url =req.url;

  if(url=='/') 
  {
    res.write('<html><title>Create server</title><body><h2>Dhinesh Welcome Create server Buddy  !</h2></body></html');
  }

  if(url==='/home')
  {
    res.write('<html><title>Create server</title><body><h2>Welcome home</h2></body></html');
  }


  if(url==='/about')
  {
    res.write('<html><title>Create server</title><body><h2> Welcome to About Us page</h2></body></html');
  }


  if(url==='/page')
  {
    res.write('<html><title>Create server</title><body><h2> Welcome to About Us page</h2></body></html');
  }

  

   
});

server.listen(4000);