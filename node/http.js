const http = require('http');
const port = 8000;

const requestHandler= ((req,res)=>{
    
    if(req.url === '/'){
       res.writeHead(200,{'Content-Type':'text/html'})
       res.end('<div style="display: flex; flex-direction: column;"><h1>this is a heading tag that is to be rendered via server</h1><p>i mean what i expected the opposite happened and i dont know what to do about it</p></div>')
    } 
    else if(req.url === '/about') res.end('Welcome to about by NodeJS')
    else if(req.url === '/js') res.end('Welcome to js by NodeJS')
    else res.end('invalid url')
})

const server = http.createServer(requestHandler)
server.listen (port,(err)=>{
    if (err) return console.log('something bad happened')
    console.log(`Server is Listening at ${port}`)
})