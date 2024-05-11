import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import GradeList from "@/components/dashboard/grade-meets/grade-list";
import MeetList from "@/components/dashboard/grade-meets/meet-list";
import { getAllMeetsForStudent } from "@/services/meet-service";
import { getAllStudentInfoByPageForStudent } from "@/services/student-info-service";
import React from "react";

const GradesMeetsPage = async ({ searchParams }) => {
	const { page } = searchParams;

	const dataGrades = (await getAllStudentInfoByPageForStudent(page)).json();
	const dataMeets = (await getAllMeetsForStudent()).json();

	const [grades, meets] = await Promise.all([dataGrades, dataMeets]);

	return (
		<>
			<PageHeader>Grades &amp; Meets</PageHeader>
			<Spacer height={70} />
			<GradeList grades={grades} />
			<Spacer />
			<MeetList meets={meets} />
			<Spacer />
		</>
	);
};

export default GradesMeetsPage;
