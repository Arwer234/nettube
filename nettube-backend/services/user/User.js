import query from "../db.js";

const createUser = async (
	{ username, fullname, password, birthdate, email, subscription, registerToken },
	requestCallback
) => {
	const dbQuery = `INSERT INTO users (username, fullname, password, birthdate, subscription, confirmed, email, register_token)
                     VALUES ("${username}", "${fullname}", "${password}", "${birthdate}", ${subscription}, 0, "${email}", "${registerToken}");`;
	await query(dbQuery, requestCallback);
};
const findOneUser = async (username, requestCallback) => {
	const dbQuery = `SELECT * from users WHERE username = "${username}"`;
	await query(dbQuery, requestCallback);
};
const isUserInDB = async (username, requestCallback) => {
	const dbQuery = `SELECT COUNT(*) as count from users WHERE username = "${username}"`;
	await query(dbQuery, requestCallback);
};
const confirmUser = async (token, requestCallback) => {
	const dbQuery = `UPDATE users SET confirmed=1 WHERE register_token = "${token}"`;
	await query(dbQuery, requestCallback);
};

export { createUser, findOneUser, confirmUser, isUserInDB };
