// const http = require("node:http")
//This is inBuild module on top of node js
const http = require("http"); //one and the same thing

//This createServer( takes a function as an argument )

/*
http.createServer( funtion ( req, response) {
})

http.createServer((req, res) => {
    })

so basically it means that this createServer() taken an fn() as an argument and also this function have req and res present as an argument

*/

const server = http.createServer((req, res) => {
  if (req.url === "/getSecData") {
    res.end("no such data");
  } 
  res.end("hello world")
});

server.listen(7787);
