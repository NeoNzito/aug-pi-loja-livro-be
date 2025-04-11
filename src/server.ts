import http from "http";
import routes from "./routes";

const server = http.createServer((req, res) => {
    routes.handle(req, res);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
})