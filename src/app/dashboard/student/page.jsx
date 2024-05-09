import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import StudentList from "@/components/dashboard/student/student-list";
import { getAllStudentsByPage } from "@/services/student-service";
import React from "react";

const StudentPage = async ({searchParams}) => {
  const { page } = searchParams;

	const res = await getAllStudentsByPage(page);
	const data = await res.json();
	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader>Student</PageHeader>
			<Spacer height={70} />
			<StudentList data={data} />
			<Spacer />
		</>
	);
};

export default StudentPage;
