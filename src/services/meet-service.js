import { getAuthHeader } from "@/helpers/auth-helper";

const { config } = require("@/helpers/config");

const API_URL = config.api.baseUrl;

export const getAllMeetsByPageForAdvisor = async (page = 0, size = 20) => {
	const qs = `page=${page}&size=${size}`;

	return fetch(`${API_URL}/meet/getAllMeetByAdvisorAsPage?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllMeetsForStudent = async () => {
	return fetch(`${API_URL}/meet/getAllMeetByStudent`, {
		headers: await getAuthHeader(),
	});
};

export const getMeetById = async (id) => {
	return fetch(`${API_URL}/meet/getMeetById/${id}`, {
		headers: await getAuthHeader(),
	});
};

export const createMeet = async (payload) => {
	return fetch(`${API_URL}/meet/save`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const updateMeet = async (payload) => {
	return fetch(`${API_URL}/meet/update/${payload.id}`, {
		method: "put",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const deleteMeet = async (id) => {
	return fetch(`${API_URL}/meet/delete/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};
