const http = require('http');
const myserver = http.createServer((req,res)=>{
  console.log("Server1");
  res.end("Hello first server");
});
myserver.listen(5000,()=>{console.log("Server is running")});