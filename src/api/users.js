import casual from "casual";

casual.define("user", () => ({
	firstName: casual.first_name,
	lastName: casual.last_name,
	quote: casual.catch_phrase,
	dayOfBirth: casual.date("YYYY-MM-DD")
}));

const users = [];

for (let i = 0; i < 50; i++) {
	users.push({ ...casual.user, id: i });
}

export default users;
