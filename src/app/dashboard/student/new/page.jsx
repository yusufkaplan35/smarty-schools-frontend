import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import StudentCreateForm from "@/components/dashboard/student/student-create-form";
import { getAllAdvisorTeachers } from "@/services/teacher-service";
import React from "react";

const StudentCreatePage = async () => {
	const res = await getAllAdvisorTeachers();
	const data = await res.json();

	if (!res.ok) throw new Error(data?.message);

	return (
		<>
			<PageHeader>New Student</PageHeader>
			<Spacer height={70} />
			<StudentCreateForm advisorTeachers={data} />
			<Spacer />
		</>
	);
};

export default StudentCreatePage;
