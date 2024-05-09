import { getAuthHeader } from "@/helpers/auth-helper";

const { config } = require("@/helpers/config");

const API_URL = config.api.baseUrl;

export const getAllTeachersByPage = async (
	page = 0,
	size = 4,
	sort = "name",
	type = "desc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${API_URL}/teachers/search?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllTeachers = async () => {
	return fetch(`${API_URL}/teachers/getAll`, {
		headers: await getAuthHeader(),
	});
};

export const getTeacherById = async (id) => {
	return fetch(`${API_URL}/teachers/getSavedTeacherById/${id}`, {
		headers: await getAuthHeader(),
	});
};

export const createTeacher = async (payload) => {
	return fetch(`${API_URL}/teachers/save`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const updateTeacher = async (payload) => {
	return fetch(`${API_URL}/teachers/update/${payload.id}`, {
		method: "put",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const deleteTeacher = async (id) => {
	return fetch(`${API_URL}/teachers/delete/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};

export const assignProgramToTeacher = async (payload) => {
	return fetch(`${API_URL}/teachers/chooseLesson`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};
