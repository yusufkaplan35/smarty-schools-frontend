"use server"

import { convertFormDataToJSON } from "@/helpers/form-validation"
import { AuthSchema } from "@/helpers/schemas/auth-schema";


export const loginAction = async ( prevState, formData ) => {
    
    const fields = convertFormDataToJSON(formData);

    try {
        AuthSchema.validateSync(fields, { abortEarly: false});
    } catch (err) {
        
    }

}