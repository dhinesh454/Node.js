const http =require('http')
const fs=require('fs')

let value;

const server = http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;

    if(url=='/')
    {

        res.write('<html>');
        res.write('<title>Read and write file</title>');
       res.write(`<body><h2>${value}</h2><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">SEND</button></form></body>`);
       res.write('</html>');
       res.end();

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
    value=message[1];
    fs.writeFileSync('Messagetext.txt',message[1]);
})

        res.setHeader('Location','/') 
    res.statusCode=302;
    return res.end()
    }


});

server.listen(3000);