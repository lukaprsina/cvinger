import { createServer } from "http";
import { parse } from "url";
import next from "next";

const port = process.env.PORT || 3000;

// Create the Express-Next App
const app = next({
    dev: false
});
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        createServer((req, res) => {
            const parsedUrl = parse(req.url, true);
            const {
                pathname,
                query
            } = parsedUrl;
            handle(req, res, parsedUrl);
            console.log("pathname", pathname);
        }).listen()
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });