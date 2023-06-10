
const http =require('http')
const fs=require('fs');



const server = http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;

    if(url=='/')
    {
        fs.readFile("Messagetext.txt",(err,data)=>{
            if(err)
            {
                console.log(err)
            } 
     
        console.log('datafromfile'+data)
        res.write('<html>');
        res.write('<title>Read and write file</title>');
       res.write(`<body><h2>${data}</h2><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">SEND</button></form></body>`);
       res.write('</html>');
       return res.end();
    })

    }

    


    if(url=='/message' && method=='POST')
    {
        


        const body =[];

        req.on('data', (chunk)=>{

            body.push(chunk);
           
        });

req.on('close',()=>{
    const parsedbody = Buffer.concat(body).toString();
    console.log(parsedbody);
    const message = parsedbody.split('=');
   
    fs.writeFileSync('Messagetext.txt',message[1]);
})

res.setHeader('Location','/') 
res.statusCode=302;
return res.end() 
    }


});

server.listen(3000);