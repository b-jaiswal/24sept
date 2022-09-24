//we want to built web server
const https=require('http');//library

var server=https.createServer((request ,response)=>{
    console.log("request is recieved from client");
response.write("<h1>Welcome</h1>");
response.write("<hr/>");
response.write("<col> <li> dbda  </li><li> pgdac </li></col>");
response.write("<hr/>");
response.end();
});

server.listen(9000);
console.log("HTTP server is listening on port 9000");