import { createServer, IncomingMessage, ServerResponse } from "http";

const port = 5000;

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
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
  }
);

server.listen(port, () => console.log(`[Server Started => Port ${port}]`));
