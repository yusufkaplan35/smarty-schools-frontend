import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import Courses from "@/components/courses/courses";
import React from "react";

export const metadata = {
	title: "Courses",
	description: "Explore the variety of courses we offer.",
};

const CoursesPage = () => {
	return (
		<>
			<PageHeader>Courses</PageHeader>
			<Spacer height={70} />
			<Courses />
			<Spacer />
		</>
	);
};

export default CoursesPage;
