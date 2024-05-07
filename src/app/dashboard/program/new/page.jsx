import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import ProgramCreateForm from "@/components/dashboard/program/program-create-form";
import { getAllLessons } from "@/services/lesson-service";
import { getAllTerms } from "@/services/term-service";
import React from "react";

const ProgramCreatePage = async () => {
	const dataTerm = (await getAllTerms()).json();
	const dataLesson = (await getAllLessons()).json();

	const [terms, lessons] = await Promise.all([dataTerm, dataLesson]);

	const newTerms = terms.map((item) => ({
		label: formatTerm(item),
		value: item.id,
	}));
	console.log(newTerms);

	return (
		<>
			<PageHeader>New Program</PageHeader>
			<Spacer height={70} />
			<ProgramCreateForm />
			<Spacer />
		</>
	);
};

export default ProgramCreatePage;
