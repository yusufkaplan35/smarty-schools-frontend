import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import MeetEditForm from "@/components/dashboard/meet/meet-edit-form";
import { getMeetById } from "@/services/meet-service";
import { getAllStudentsForAdvisor } from "@/services/student-service";
import React from "react";

const MeetEditPage = async ({ params }) => {
	if (!params.id) throw new Error("Meet id is missing");

	const dataMeet = (await getMeetById(params.id)).json();
	const dataStudents = (await getAllStudentsForAdvisor()).json();

	const [meet, students] = await Promise.all([dataMeet, dataStudents]);

	const allStudents = students.map((item) => ({
		value: item.userId,
		label: `${item.name} ${item.surname}`,
	}));

	const currentStudentIds = meet.object.students.map((item) =>
		item.id.toString()
	);

	return (
		<>
			<PageHeader>Edit Meet</PageHeader>
			<Spacer height={70} />
			<MeetEditForm
				allStudents={allStudents}
				meet={meet.object}
				currentStudentIds={currentStudentIds}
			/>
			<Spacer />
		</>
	);
};

export default MeetEditPage;
