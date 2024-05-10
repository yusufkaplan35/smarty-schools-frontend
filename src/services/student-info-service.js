import { getAuthHeader } from "@/helpers/auth-helper";

const { config } = require("@/helpers/config");

const API_URL = config.api.baseUrl;

export const getAllStudentInfoByPageForTeacher = async (
	page = 0,
	size = 20,
) => {
	const qs = `page=${page}&size=${size}`;

	return fetch(`${API_URL}/studentInfo/getAllForTeacher?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllStudentInfoByPageForStudent = async (
	page = 0,
	size = 20,
) => {
	const qs = `page=${page}&size=${size}`;

	return fetch(`${API_URL}/studentInfo/getAllByStudent?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getStudentInfoById = async (id) => {
	return fetch(`${API_URL}/studentInfo/get/${id}`, {
		headers: await getAuthHeader(),
	});
};


export const createStudentInfo = async (payload) => {
	return fetch(`${API_URL}/studentInfo/save`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const updateStudentInfo = async (payload) => {
	return fetch(`${API_URL}/studentInfo/update/${payload.id}`, {
		method: "put",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const deleteStudentInfo = async (id) => {
	return fetch(`${API_URL}/studentInfo/delete/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};
