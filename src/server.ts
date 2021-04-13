import dotenv from "dotenv";
import { createServer, IncomingMessage, ServerResponse } from "http";

dotenv.config();
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

server.listen(process.env.PORT, () => console.log(`[Server Started => Port ${process.env.PORT}]`));
