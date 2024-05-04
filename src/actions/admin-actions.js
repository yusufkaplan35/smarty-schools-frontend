"use server";

import {
	YupValidationError,
	convertFormDataToJSON,
	response,
	transformYupErrors,
} from "@/helpers/form-validation";
import { AdminSchema } from "@/helpers/schemas/admin-schema";
import { createAdmin, deleteAdmin } from "@/services/admin-service";
import { revalidatePath } from "next/cache";

export const createAdminAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		AdminSchema.validateSync(fields, { abortEarly: false });

		const res = await createAdmin(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/admin");
		return response(true, "Admin was created");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteAdminAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	try {
		const res = await deleteAdmin(id);

		if (!res.ok) {
			// API daki donus degeri json degil string oldugu icin res.text() ile karsilamak zorunda kaldik
			const data = await res.text();
			throw new Error(data);
		}

		revalidatePath("/dashboard/admin");
		return response(true, "Admin was deleted");

		
	} catch (err) {
		return response(false, err.message);
	}
};
