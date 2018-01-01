const PORT = 4000;
const jsonServer = require('json-server');

const server = jsonServer.create();
server.use(jsonServer.defaults());

const router = jsonServer.router('db.json');
server.use(router);

server.listen(PORT);
console.log(`listening at ${PORT}`);
