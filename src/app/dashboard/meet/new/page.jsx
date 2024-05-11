import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import MeetCreateForm from "@/components/dashboard/meet/meet-create-form";
import { getAllStudentsForAdvisor } from "@/services/student-service";
import React from "react";

const MeetCreatePage = async () => {
	const res = await getAllStudentsForAdvisor();
	const data = await res.json();

	const students = data.map((item) => ({
		value: item.userId,
		label: `${item.name} ${item.surname}`,
	}));

	return (
		<>
			<PageHeader>New Meet</PageHeader>
			<Spacer height={70} />
			<MeetCreateForm students={students} />
			<Spacer />
		</>
	);
};

export default MeetCreatePage;
