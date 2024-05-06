"use server";

import { YupValidationError, convertFormDataToJSON, transformYupErrors } from "@/helpers/form-validation";
import { ProgramSchema } from "@/helpers/schemas/program-schema";

export const createProgramAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		ProgramSchema.validateSync(fields, { abortEarly: false });




	} catch (err) {
        if(err instanceof YupValidationError){
            return transformYupErrors(err.inner)
        }

        throw err;
    }
};
