import * as Yup from "yup";

export const StudentInfoSchema = Yup.object({
	absentee: Yup.number()
		.typeError("Invalid")
		.min(0, "Invalid")
		.required("Required"),
	educationTermId: Yup.number().typeError("Invalid").required("Required"),
	lessonId: Yup.number().typeError("Invalid").required("Required"),
	studentId: Yup.number().typeError("Invalid").required("Required"),
	finalExam: Yup.number()
		.typeError("Invalid")
		.min(0, "Invalid")
		.max(100, "Invalid")
		.required("Required"),
	midtermExam: Yup.number()
		.typeError("Invalid")
		.min(0, "Invalid")
		.max(100, "Invalid")
		.required("Required"),
	infoNote: Yup.string().min(10, "Min 10 chars").required("Required"),
});
