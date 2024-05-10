import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import StudentInfoList from "@/components/dashboard/student-info/student-info-list";
import { getAllStudentInfoByPageForTeacher } from "@/services/student-info-service";
import React from "react";

const StudentInfoPage = async ({searchParams}) => {
  const { page } = searchParams;

	const res = await getAllStudentInfoByPageForTeacher(page);
	const data = await res.json();
	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader>Student Info</PageHeader>
			<Spacer height={70} />
			<StudentInfoList data={data} />
			<Spacer />
		</>
	);
};

export default StudentInfoPage;
