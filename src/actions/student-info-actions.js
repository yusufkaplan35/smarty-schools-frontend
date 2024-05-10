"use server";

import {
	YupValidationError,
	convertFormDataToJSON,
	response,
	transformYupErrors,
} from "@/helpers/form-validation";
import { StudentInfoSchema } from "@/helpers/schemas/student-info-schema";
import { createStudentInfo, deleteStudentInfo, updateStudentInfo } from "@/services/student-info-service";
import { revalidatePath } from "next/cache";

export const createStudentInfoAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		StudentInfoSchema.validateSync(fields, { abortEarly: false });

		const res = await createStudentInfo(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/student-info");
		return response(true, "Info was created");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const updateStudentInfoAction = async (prevState, formData) => {
	if (!formData.get("id")) throw new Error("Id is missing");

	try {
		const fields = convertFormDataToJSON(formData);

		StudentInfoSchema.validateSync(fields, { abortEarly: false });

		const res = await updateStudentInfo(fields);
		const data = await res.json();

		

		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/student-info");
		return response(true, "Info was updated");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteStudentInfoAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	try {
		const res = await deleteStudentInfo(id);

		if (!res.ok) {
			const data = await res.json();
			throw new Error(data?.message);
		}

		revalidatePath("/dashboard/student-info");
		return response(true, "Info was deleted");
	} catch (err) {
		return response(false, err.message);
	}
};
