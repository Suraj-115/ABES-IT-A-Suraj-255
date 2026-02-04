// const http = require('http');
// const myserver = http.createServer((req,res)=>{
//   console.log("Server1");
//   if(req.url === "/"){
//     res.setHeader("Content-type","text/html");
//     res.write("<html><head><title>Home Page</title></head>");
//     res.write('<body><h1>ABES Engineering College</h1><img src="https://media.licdn.com/dms/image/v2/C510BAQGHhq9X-H8LyQ/company-logo_200_200/company-logo_200_200/0/1631345366169?e=2147483647&v=beta&t=8hq7Hhr_Vlu6uIXpTU9yv31n6jB0_zBzvuFqHmHGwlg" alt="Home Page" ></body></html>');
//     res.end();
//   }
//   else if(req.url === "/about"){
//     res.end("Suraj Agarwal");
//   }
//   else if(req.url === "/contact"){
//     res.end("agarwalsuraj863@gmail.com");
//   }
//   else if(req.url === "/class"){
//     res.end("IT-A");
//   }
//   else{
//     res.end("Error 404! Page not found");
//   }
// });
// myserver.listen(5000,()=>{console.log("Server is running")});

const fs = require('fs');
// fs.writeFileSync("./user.txt","This is the great Suraj Agarwal here.");
// fs.writeFileSync("./abes.txt","We are students of ABESEC");
const result = fs.readFileSync("./abes.txt","utf-8");
console.log(result);
