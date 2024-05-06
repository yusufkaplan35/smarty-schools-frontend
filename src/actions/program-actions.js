"use server";

import {
	YupValidationError,
	convertFormDataToJSON,
	response,
	transformYupErrors,
} from "@/helpers/form-validation";
import { ProgramSchema } from "@/helpers/schemas/program-schema";
import { createProgram, deleteProgram } from "@/services/program-service";
import { revalidatePath } from "next/cache";

export const createProgramAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		ProgramSchema.validateSync(fields, { abortEarly: false });

		console.log(fields);

		const res = await createProgram(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/program");
		return response(true, "Program was created");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteProgramAction = async (id) => {
	if (!id) throw new Error("Program Id is missing");

	try {
		const res = await deleteProgram(id);
		const data = await res.json();

		if (!res.ok) {
			throw new Error(data?.message);
		}

		revalidatePath("/dashboard/program");
		return response(true, "Program was deleted");
	} catch (err) {
		return response(false, err.message);
	}
};
