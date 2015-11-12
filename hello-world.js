var express, server;

express = require("express");
server = express();

require("./app")(server)

// var http = require("http");

// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(16427);
