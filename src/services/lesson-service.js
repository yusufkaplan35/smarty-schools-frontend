import { getAuthHeader } from "@/helpers/auth-helper";

const { config } = require("@/helpers/config");

const API_URL = config.api.baseUrl;

export const getAllLessonsByPage = async (
	page = 0,
	size = 20,
	sort = "lessonName",
	type = "desc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${API_URL}/lessons/search?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllLessons = async () => {
	return fetch(`${API_URL}/lessons/getAll`, {
		headers: await getAuthHeader(),
	});
};

export const createLesson = async (payload) => {
	return fetch(`${API_URL}/lessons/save`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const deleteLesson = async (id) => {
	return fetch(`${API_URL}/lessons/delete/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};
