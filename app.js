const {
    createServer
} = require("http");
const {
    parse
} = require("url");
const next = require("next");
const { parseCookies } = require('nookies');

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
            /* const parsedCookies = parseCookies({ req })
            req.headers.cookie = parsedCookies */
            handle(req, res, parsedUrl);
        }).listen(port, (err) => {
            if (err) throw err;
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });