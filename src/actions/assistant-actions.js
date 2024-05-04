"use server";

import {
	YupValidationError,
	convertFormDataToJSON,
	response,
	transformYupErrors,
} from "@/helpers/form-validation";
import { AssistantSchema } from "@/helpers/schemas/assistant-schema";
import {
	createAssistant,
	deleteAssistant,
	updateAssistant,
} from "@/services/assistant-service";
import { revalidatePath } from "next/cache";

export const createAssistantAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		AssistantSchema.validateSync(fields, { abortEarly: false });

		const res = await createAssistant(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/assistant-manager");
		console.log("Hi!!!")
		return response(true, "Assistant was created", {});

	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const updateAssistantAction = async (prevState, formData) => {
	if (!formData.get("id")) throw new Error("Id is missing");

	try {
		const fields = convertFormDataToJSON(formData);

		AssistantSchema.validateSync(fields, { abortEarly: false });

		const res = await updateAssistant(fields);
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
	return response(true, "Assistant was updated");
};

export const deleteAssistantAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	try {
		const res = await deleteAssistant(id);

		if (!res.ok) {
			// API daki donus degeri json degil string oldugu icin res.text() ile karsilamak zorunda kaldik
			const data = await res.text();
			throw new Error(data);
		}
	} catch (err) {
		return response(false, err.message);
	}

	revalidatePath("/dashboard/assistant-manager");
	return response(true, "Assistant was deleted");
};
