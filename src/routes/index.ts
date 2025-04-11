import { IncomingMessage, ServerResponse } from "http";
import bookController from "../controllers/bookController";


export default {
    handle(req: IncomingMessage, res: ServerResponse) {
        if (req.url === "/books" && req.method === "GET") {
            bookController.getBooks(req, res);
        }
        else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Route not found");
        }
    }
};