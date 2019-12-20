const jsonServer = require("json-server");
const server = jsonServer.create();
const middleware = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(jsonServer.bodyParser);
server.use(middleware);

server.get("/users", (req, res) => {
	const users = require("./users/index");
	res.status(200).jsonp(users());
});

server.listen(port, () => ">> Mock API running.");
