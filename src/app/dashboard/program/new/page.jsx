import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import ProgramCreateForm from "@/components/dashboard/program/program-create-form";
import { formatDateYM } from "@/helpers/date-time";
import { formatTerm } from "@/helpers/misc";
import { getAllLessons } from "@/services/lesson-service";
import { getAllTerms } from "@/services/term-service";
import React from "react";

const ProgramCreatePage = async () => {
	const dataTerm = (await getAllTerms()).json();
	const dataLesson = (await getAllLessons()).json();

	const [terms, lessons] = await Promise.all([dataTerm, dataLesson]);

	const newTerms = terms.map((item) => ({
		label: `${formatTerm(item)} - ${formatDateYM(item.startDate)}`,
		value: item.id,
	}));

	return (
		<>
			<PageHeader>New Program</PageHeader>
			<Spacer height={70} />
			<ProgramCreateForm terms={newTerms} lessons={lessons} />
			<Spacer />
		</>
	);
};

export default ProgramCreatePage;
