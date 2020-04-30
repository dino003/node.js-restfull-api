'use strict';

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const http = require('http');
const app = require('./app');


const server = http.createServer(app);

server.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);

});

