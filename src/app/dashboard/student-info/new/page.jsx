import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import StudentInfoCreateForm from "@/components/dashboard/student-info/student-info-create-form";
import { formatDateYM } from "@/helpers/date-time";
import { formatTerm } from "@/helpers/misc";
import { getAllLessons } from "@/services/lesson-service";
import { getAllStudentsForAdvisor } from "@/services/student-service";
import { getAllTerms } from "@/services/term-service";
import React from "react";

const StudentInfoCreatePage = async () => {
	const studentsData = (await getAllStudentsForAdvisor()).json();
	const lessonsData = (await getAllLessons()).json();
	const termsData = (await getAllTerms()).json();

	const [students, lessons, terms] = await Promise.all([
		studentsData,
		lessonsData,
		termsData,
	]);

	let newStudents = [];
	let newTerms = [];

	if (Array.isArray(students)) {
		newStudents = students.map((item) => ({
			label: `${item.name} ${item.surname}`,
			value: item.userId,
		}));
	}


	if (Array.isArray(terms)) {
		newTerms = terms.map((item) => ({
			label: `${formatTerm(item)} ${formatDateYM(item.startDate)} 
		`,
			value: item.id,
		}));
	}

	return (
		<>
			<PageHeader>New Student</PageHeader>
			<Spacer height={70} />
			<StudentInfoCreateForm
				students={newStudents}
				lessons={lessons}
				terms={newTerms}
			/>
			<Spacer />
		</>
	);
};

export default StudentInfoCreatePage;
