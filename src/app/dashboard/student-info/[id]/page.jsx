import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import StudentInfoEditForm from "@/components/dashboard/student-info/student-info-edit-form";
import { formatDateYM } from "@/helpers/date-time";
import { formatTerm } from "@/helpers/misc";
import { getAllLessons } from "@/services/lesson-service";
import { getStudentInfoById } from "@/services/student-info-service";
import { getAllStudentsForAdvisor } from "@/services/student-service";
import { getAllTerms } from "@/services/term-service";
import { notFound } from "next/navigation";
import React from "react";

const StudentInfoEditPage = async ({ params }) => {
	const studentsData = (await getAllStudentsForAdvisor()).json();
	const lessonsData = (await getAllLessons()).json();
	const termsData = (await getAllTerms()).json();
	const studentInfoData = (await getStudentInfoById(params.id)).json();

	const [students, lessons, terms, studentInfo] = await Promise.all([
		studentsData,
		lessonsData,
		termsData,
		studentInfoData,
	]);

	if (studentInfo.statusCode) notFound();

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
			<StudentInfoEditForm
				students={newStudents}
				lessons={lessons}
				terms={newTerms}
				studentInfo={studentInfo}
			/>
			<Spacer />
		</>
	);
};

export default StudentInfoEditPage;
