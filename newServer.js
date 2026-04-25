const http = require("node:http"); //this is not some external modules this are preseent in the root folder of the node itself

const server = http.createServer((request, response) => {
  if (request.url == "/getdata") response.end("This is a API data ");
});

server.listen(4004);
