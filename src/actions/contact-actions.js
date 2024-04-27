"use server";

import {
	YupValidationError,
	convertFormDataToJSON,
	response,
	transformYupErrors,
} from "@/helpers/form-validation";
import { ContactSchema } from "@/helpers/schemas/contact-schema";
import { createContactMessage } from "@/services/contact-services";

export const createContactMessageAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		ContactSchema.validateSync(fields, { abortEarly: false });

		const res = await createContactMessage(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, "", data.validations )
		}

        return response(true, "Your message was sent");

	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};
