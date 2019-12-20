import users from "../api/users";

const contents = JSON.stringify(users);

export function get(req, res) {
	res.writeHead(200, {
		"Content-Type": "application/json"
	});

	res.end(contents);
}
