import { getAuthHeader } from "@/helpers/auth-helper";

const { config } = require("@/helpers/config");

const API_URL = config.api.baseUrl;

export const getAllAssistantsByPage = async (
	page = 0,
	size = 20,
	sort = "name",
	type = "desc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${API_URL}/vicedean/search?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAssistantById = async (id) => {
	return fetch(`${API_URL}/vicedean/getViceDeanById/${id}`, {
		headers: await getAuthHeader(),
	});
};

export const createAssistant = async (payload) => {
	return fetch(`${API_URL}/vicedean/save`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const updateAssistant = async (payload) => {
	return fetch(`${API_URL}/vicedean/update/${payload.id}`, {
		method: "put",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const deleteAssistant = async (id) => {
	return fetch(`${API_URL}/vicedean/delete/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};
