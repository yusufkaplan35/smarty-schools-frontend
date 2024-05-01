import { getAuthHeader } from "@/helpers/auth.-helper";

const { config } = require("@/helpers/config");

const API_URL = config.api.baseUrl;

export const getAllAdminsByPage = (
	page = 0,
	size = 10,
	sort = "name",
	type = "desc"
) => {

    const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`

    return fetch(`${API_URL}/admin/getAll?${qs}`, {
        headers: getAuthHeader()
    })

};
