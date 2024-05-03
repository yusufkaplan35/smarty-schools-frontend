import { getAuthHeader } from "@/helpers/auth-helper";

const { config } = require("@/helpers/config");

const API_URL = config.api.baseUrl;

export const getAllManagersByPage = async (
	page = 0,
	size = 4,
	sort = "name",
	type = "desc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${API_URL}/dean/search?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getManagerById = async (id) => {
	return fetch(`${API_URL}/dean/getManagerById/${id}`, {
		headers: await getAuthHeader(),
	});
};

export const createManager = async (payload) => {
	return fetch(`${API_URL}/dean/save`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const updateManager = async (payload) => {
	return fetch(`${API_URL}/dean/update/${payload.id}`, {
		method: "put",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const deleteManager = async (id) => {
	return fetch(`${API_URL}/dean/delete/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};
