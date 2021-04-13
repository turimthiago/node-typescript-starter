"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var port = 5000;
var server = http_1.createServer(function (request, response) {
    switch (request.url) {
        case "/test": {
            if (request.method === "GET") {
                response.end(JSON.stringify({ message: "Testing..." }));
            }
            break;
        }
        default: {
            response.statusCode = 404;
            response.end();
        }
    }
});
server.listen(port, function () { return console.log("Server Started => Port " + port); });
