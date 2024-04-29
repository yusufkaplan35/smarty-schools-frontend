"use server";

import { signIn } from "@/auth";
import {
	YupValidationError,
	convertFormDataToJSON,
	response,
	transformYupErrors,
} from "@/helpers/form-validation";
import { AuthSchema } from "@/helpers/schemas/auth-schema";
import { AuthError } from "next-auth";

export const loginAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);

	try {
		AuthSchema.validateSync(fields, { abortEarly: false });

        await signIn("credentials", fields);

	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		} else if (err instanceof AuthError) {
			return response(false, "Invalid credentials");
		}

		throw err;
	}
};
