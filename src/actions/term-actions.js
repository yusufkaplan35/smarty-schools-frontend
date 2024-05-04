"use server";

import {
	YupValidationError,
	convertFormDataToJSON,
	response,
	transformYupErrors,
} from "@/helpers/form-validation";
import { TermSchema } from "@/helpers/schemas/term-schema";
import { createTerm, deleteTerm } from "@/services/term-service";
import { revalidatePath } from "next/cache";

export const createTermAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		TermSchema.validateSync(fields, { abortEarly: false });

		const res = await createTerm(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/education-term");
		return response(true, "Term was created");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteTermAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	try {
		const res = await deleteTerm(id);

		if (!res.ok) {
			// API daki donus degeri json degil string oldugu icin res.text() ile karsilamak zorunda kaldik
			const data = await res.text();
			throw new Error(data);
		}

		revalidatePath("/dashboard/education-term");
		return response(true, "Term was deleted");
	} catch (err) {
		return response(false, err.message);
	}
};
