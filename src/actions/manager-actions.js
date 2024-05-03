"use server";

import {
	YupValidationError,
	convertFormDataToJSON,
	response,
	transformYupErrors,
} from "@/helpers/form-validation";
import { ManagerSchema } from "@/helpers/schemas/manager-schema";
import {
	createManager,
	deleteManager,
	updateManager,
} from "@/services/manager-service";
import { revalidatePath } from "next/cache";

export const createManagerAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		ManagerSchema.validateSync(fields, { abortEarly: false });

		const res = await createManager(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}

	//revalidatePath("/dashboard/admin");
	return response(true, "Manager was created");
};

export const updateManagerAction = async (prevState, formData) => {
	
	if (!formData.get("id")) throw new Error("Id is missing");

	try {
		const fields = convertFormDataToJSON(formData);

		ManagerSchema.validateSync(fields, { abortEarly: false });

		const res = await updateManager(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}

	//revalidatePath("/dashboard/admin");
	return response(true, "Manager was updated");
};

export const deleteManagerAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	try {
		const res = await deleteManager(id);

		if (!res.ok) {
			// API daki donus degeri json degil string oldugu icin res.text() ile karsilamak zorunda kaldik
			const data = await res.text();
			throw new Error(data);
		}
	} catch (err) {
		return response(false, err.message);
	}

	revalidatePath("/dashboard/manager");
	return response(true, "Manager was deleted");
};
