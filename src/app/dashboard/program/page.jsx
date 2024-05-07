import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import ProgramList from "@/components/dashboard/program/program-list";
import UnassignedProgramlist from "@/components/dashboard/program/unassigned-program-list";
import {
	getAllProgramsByPage,
	getAllUnAssignedPrograms,
} from "@/services/program-service";
import { getAllTeachers } from "@/services/teacher-service";
import React from "react";

const ProgramPage = async ({ searchParams }) => {
	const { page } = searchParams;

	const dataAllPrograms = (await getAllProgramsByPage(page)).json();
	const dataUnassignedPrograms = (await getAllUnAssignedPrograms()).json();
	const dataTeachers = (await getAllTeachers()).json();

	const [allPrograms, unassignedPrograms, teachers] = await Promise.all([
		dataAllPrograms,
		dataUnassignedPrograms,
		dataTeachers,
	]);

	// UnassignedProgramList icindeki SeletInput component i icin label ve value dan olusan bir liste olusturuyoruz
	const newTeachers = teachers.map((item) => ({
		value: item.userId,
		label: `${item.name} ${item.surname}`,
	}));

	return (
		<>
			<PageHeader>Program</PageHeader>
			<Spacer height={70} />
			<ProgramList data={allPrograms} />
			<Spacer />
			<UnassignedProgramlist
				programs={unassignedPrograms}
				teachers={newTeachers}
			/>
			<Spacer />
		</>
	);
};

export default ProgramPage;
