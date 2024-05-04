"use server";

import {
	YupValidationError,
	convertFormDataToJSON,
	response,
	transformYupErrors,
} from "@/helpers/form-validation";
import { LessonSchema } from "@/helpers/schemas/admin-schema";
import { createLesson, deleteLesson } from "@/services/admin-service";
import { revalidatePath } from "next/cache";

export const createLessonAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		LessonSchema.validateSync(fields, { abortEarly: false });

		const res = await createLesson(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/lesson");
		return response(true, "Lesson was created");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteLessonAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	try {
		const res = await deleteLesson(id);

		if (!res.ok) {
			const data = await res.json();
			throw new Error(data);
		}

		revalidatePath("/dashboard/lesson");
		return response(true, "Lesson was deleted");
	} catch (err) {
		return response(false, err.message);
	}
};
