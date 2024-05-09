import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import TeacherCreateForm from "@/components/dashboard/teacher/teacher-create-form";
import { getAllPrograms } from "@/services/program-service";
import React from "react";

const TeacherCreatePage = async () => {
	const res = await getAllPrograms();
	const data = await res.json();

	const programs = data.map((item) => ({
		id: item.lessonProgramId,
		label: item.lessonName.map((lesson) => lesson.lessonName).join("-"),
	}));

	return (
		<>
			<PageHeader>New Teacher</PageHeader>
			<Spacer height={70} />
			<TeacherCreateForm programs={programs} />
			<Spacer />
		</>
	);
};

export default TeacherCreatePage;
