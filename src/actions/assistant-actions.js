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

		revalidatePath("/dashboard/assistant-manager");
		return response(true, "Assistant was updated");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteAssistantAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	try {
		const res = await deleteAssistant(id);

		if (!res.ok) {
			const data = await res.json();
			throw new Error(data);
		}

		revalidatePath("/dashboard/assistant-manager");
		return response(true, "Assistant was deleted");
	} catch (err) {
		return response(false, err.message);
	}
};
