import query from "../db.js";

const getOneVideo = async (title) => {
	const dbQuery = `SELECT * from videos where title = ${title}`;
	const result = await query(dbQuery);
	return result;
};

const getVideosByGenre = async (genre) => {
	const dbQuery = `SELECT * from videos where genre = ${genre}`;
	const result = await query(dbQuery);
	return result;
};

const getAllVideos = async (resultCallback) => {
	const dbQuery = `SELECT * from videos`;
	await query(dbQuery, resultCallback);
};

export { getOneVideo, getVideosByGenre, getAllVideos };