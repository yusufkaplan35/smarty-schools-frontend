import * as Yup from "yup";
import { isStringArray } from "../form-validation";
import { isAfter } from "../date-time";

export const MeetSchema = Yup.object({
	date: Yup.string()
		.test("isValid", "Invalid date", (val) => {
			return new Date(val) > new Date();
		})
		.required("Required"),
	description: Yup.string().required("Required"),
	startTime: Yup.string().required("Required"),
	stopTime: Yup.string()
		.test(
			"isAfter",
			"End time must be later than start time",
			(val, context) => isAfter(context.parent.startTime, val)
		)
		.required("Required"),
	studentIds: Yup.string()
		.test("isArray", "Required", (val) => isStringArray(val))
		.required("Required"),
});
