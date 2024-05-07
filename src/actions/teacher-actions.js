"use server";

import {
	YupValidationError,
	convertFormDataToJSON,
	response,
	transformYupErrors,
} from "@/helpers/form-validation";
import { ProgramAssignmentSchema } from "@/helpers/schemas/program-assignment-schema";
import { TeacherSchema } from "@/helpers/schemas/teacher-schema";
import { assignProgramToTeacher, createTeacher, deleteTeacher, updateTeacher } from "@/services/teacher-service";
import { revalidatePath } from "next/cache";

export const createTeacherAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		TeacherSchema.validateSync(fields, { abortEarly: false });

		const res = await createTeacher(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/teacher");
		return response(true, "Teacher was created");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const updateTeacherAction = async (prevState, formData) => {
	if(!formData.get("id")) throw new Error("Id is misssing!")

	try {
		const fields = convertFormDataToJSON(formData);

		TeacherSchema.validateSync(fields, { abortEarly: false });

		const res = await updateTeacher(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/teacher");
		return response(true, "Teacher was updated");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteTeacherAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	try {
		const res = await deleteTeacher(id);

		if (!res.ok) {
			const data = await res.json();
			throw new Error(data.message);
		}

		revalidatePath("/dashboard/teacher");
		return response(true, "Teacher was deleted");

		
	} catch (err) {
		return response(false, err.message);
	}
};

export const assignProgramAction = async (prevState, formData) => {

	
	try {
		const fields = convertFormDataToJSON(formData);

		ProgramAssignmentSchema.validateSync(fields, { abortEarly: false });

		const payload = {
			...fields,
			lessonProgramId: JSON.parse(fields.lessonProgramId)
		}

		const res = await assignProgramToTeacher(payload);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/program");
		return response(true, "Program was assigned");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};
