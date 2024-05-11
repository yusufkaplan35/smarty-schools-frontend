import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import AllProgramList from "@/components/dashboard/choose-lesson/all-program-list";
import StudentProgramList from "@/components/dashboard/choose-lesson/student-program-list";
import { getAllPrograms, getAllProgramsByStudent } from "@/services/program-service";
import React from "react";

const ChooseLessonPage = async () => {
	const dataAllPrograms = (await getAllPrograms()).json();
	const dataStudentPrograms = (await getAllProgramsByStudent()).json();

	const [allPrograms, studentPrograms] = await Promise.all([dataAllPrograms, dataStudentPrograms])


  
	return (
		<>
			<PageHeader>Choose Program</PageHeader>
			<Spacer height={70} />
			<AllProgramList allPrograms={allPrograms}/>
			<Spacer />
			<StudentProgramList studentPrograms={studentPrograms}/>
			<Spacer />

		</>
	);
};

export default ChooseLessonPage;
