var http = require('http');

http.createServer(function(req,res){    
  res.writeHead(200,{'Content-Type':'text/plain'});    
  res.end('Hello body!');
}).listen(80,'127.0.0.1');

console.log('NodeJS Server sunning at http://127.0.0.1:80');
