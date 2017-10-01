

const http = require("http");
const url = require("url");
const moment = require('moment');

function start() {
  function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.writeHead(200, {"myname": "Maria"});
    const pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

if(pathname=="/time")
{
console.log("time received");
response.writeHead(200, {"Content-Type": "text/plain"});
response.write(moment().format('DD-MM-YYYY HH:mm'));
}
else if(pathname=="/author")
{
console.log("author received");
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Maria Marevskaia");
}
else if(pathname=="/length")
{
console.log("length received");
const paramsLength = url.parse(request.url).search ? String(url.parse(request.url).search.length-1) : String(0);
response.writeHead(200, {"Content-Type": "text/plain"});
response.write(paramsLength);
}
else{
response.write("");
}

    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}


start();



   

