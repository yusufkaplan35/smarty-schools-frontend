import * as Yup from "yup";
import { getTermValues } from "../misc";

const terms = getTermValues();

export const TermSchema = Yup.object({
	term: Yup.string().oneOf(terms, "Invalid term").required("Required"),
	startDate: Yup.date()
		.min(new Date(), "Invalid start date")
		.required("Required"),
	endDate: Yup.date()
		.min(Yup.ref("startDate"), "Invalid end date")
		.required("Required"),
	lastRegistrationDate: Yup.date()
		.max(Yup.ref("startDate"), "Invalid registration date")
		.required("Required"),
});
