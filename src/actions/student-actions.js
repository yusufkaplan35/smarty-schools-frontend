"use server";

import {
	YupValidationError,
	convertFormDataToJSON,
	response,
	transformYupErrors,
} from "@/helpers/form-validation";
import { StudentSchema } from "@/helpers/schemas/student-schema";
import { createStudent, deleteStudent, updateStudent } from "@/services/student-service";
import { revalidatePath } from "next/cache";

export const createStudentAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		StudentSchema.validateSync(fields, { abortEarly: false });

		const res = await createStudent(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/student");
		return response(true, "Student was created");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const updateStudentAction = async (prevState, formData) => {
	if (!formData.get("id")) throw new Error("Id is missing");

	try {
		const fields = convertFormDataToJSON(formData);

		StudentSchema.validateSync(fields, { abortEarly: false });

		const res = await updateStudent(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/student");
		return response(true, "Student was updated");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteStudentAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	try {
		const res = await deleteStudent(id);

		if (!res.ok) {
			const data = await res.json();
			throw new Error(data?.message);
		}

		revalidatePath("/dashboard/student");
		return response(true, "Student was deleted");
	} catch (err) {
		return response(false, err.message);
	}
};
