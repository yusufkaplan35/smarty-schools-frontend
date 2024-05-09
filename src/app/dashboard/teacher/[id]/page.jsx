import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import TeacherEditForm from "@/components/dashboard/teacher/teacher-edit-form";
import { getAllPrograms } from "@/services/program-service";
import { getTeacherById } from "@/services/teacher-service";
import React from "react";

const TeacherEditPage = async ({ params }) => {
	if (!params.id) throw new Error("User id is missing");

	const dataTeacher = (await getTeacherById(params.id)).json();
	const dataPrograms = (await getAllPrograms()).json();

	const [teacher, programs] = await Promise.all([dataTeacher, dataPrograms]);

	const allPrograms = programs.map((item) => ({
		id: item.lessonProgramId,
		label: item.lessonName.map((lesson) => lesson.lessonName).join("-"),
	}));

	return (
		<>
			<PageHeader>Edit Teacher</PageHeader>
			<Spacer height={70} />
			<TeacherEditForm teacher={teacher} programs={allPrograms} />
			<Spacer />
		</>
	);
};

export default TeacherEditPage;
