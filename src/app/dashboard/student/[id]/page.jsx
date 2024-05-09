import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import StudentEditForm from "@/components/dashboard/student/student-edit-form";
import { getStudentById } from "@/services/student-service";
import { getAllAdvisorTeachers } from "@/services/teacher-service";
import React from "react";

const StudentEditPage = async ({ params }) => {
	if (!params.id) throw new Error("User id is missing");

	const dataStudent = (await getStudentById(params.id)).json();
	const dataAdvisorTeachers = (await getAllAdvisorTeachers()).json();

	const [student, advisorTeachers] = await Promise.all([
		dataStudent,
		dataAdvisorTeachers,
	]);

	const allAdvisorTeachers = advisorTeachers.map((item) => ({
		value: item.advisorTeacherId,
		label: item.teacherName,
	}));

	console.log(student)

	return (
		<>
			<PageHeader>Edit Student</PageHeader>
			<Spacer height={70} />
			<StudentEditForm
				student={student}
				advisorTeachers={allAdvisorTeachers}
			/>
			<Spacer />
		</>
	);
};

export default StudentEditPage;
