import { getAuthHeader } from "@/helpers/auth-helper";

const { config } = require("@/helpers/config");

const API_URL = config.api.baseUrl;

export const getAllTermsByPage = async (
	page = 0,
	size = 20,
	sort = "startDate",
	type = "desc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${API_URL}/educationTerms/search?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllTerms = async () => {
	return fetch(`${API_URL}/educationTerms/getAll`, {
		headers: await getAuthHeader(),
	});
};

export const getTermById = async (id) => {
	return fetch(`${API_URL}/educationTerms/${id}`, {
		headers: await getAuthHeader(),
	});
};

export const createTerm = async (payload) => {
	return fetch(`${API_URL}/educationTerms`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const deleteTerm = async (id) => {
	return fetch(`${API_URL}/educationTerms/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};
