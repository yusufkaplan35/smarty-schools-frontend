import * as Yup from "yup";
import { getDayValues } from "../misc";
import { isAfter } from "../date-time";

export const ProgramSchema = Yup.object({
	lessonIdList: Yup.string()
		.test("isArr", "Invalid lesson list", (val) => {
			const arr = JSON.parse(val);
			return Array.isArray(arr) && arr.length > 0;
		})
		.required("Required"),
	day: Yup.string().oneOf(getDayValues(), "Invalid day").required("Required"),
	educationTermId: Yup.string().required("Required"),
	startTime: Yup.string().datetime().required("Required"),
	stopTime: Yup.string()
		.datetime()
		.test("isLater", "Must be later than start time", (val) =>
			isAfter(Yup.ref("startTime"), val)
		)
		.required("Required"),
});
