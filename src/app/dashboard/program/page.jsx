import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import ProgramList from "@/components/dashboard/program/program-list";
import UnassignedProgramlist from "@/components/dashboard/program/unassigned-program-list";
import {
	getAllProgramsByPage,
	getAllUnAssignedPrograms,
} from "@/services/program-service";
import React from "react";

const ProgramPage = async ({ searchParams }) => {
	const { page } = searchParams;

	const dataAllPrograms = (await getAllProgramsByPage(page)).json();
	const dataUnassignedPrograms = (await getAllUnAssignedPrograms()).json();

	const [allPrograms, unassignedPrograms] = await Promise.all([
		dataAllPrograms,
		dataUnassignedPrograms,
	]);
    
	return (
		<>
			<PageHeader>Program</PageHeader>
			<Spacer height={70} />
			<ProgramList data={allPrograms} />
			<Spacer />
			<UnassignedProgramlist data={unassignedPrograms} />
			<Spacer />
		</>
	);
};

export default ProgramPage;
