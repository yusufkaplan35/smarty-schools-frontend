import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import { getAllLessonsByPage } from "@/services/lesson-service";
import React from "react";

const LessonPage = async ({searchParams}) => {
  const { page } = searchParams;

	const res = await getAllLessonsByPage(page);
	const data = await res.json();
	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader>Lesson</PageHeader>
			<Spacer height={70} />
			
			<Spacer />
		</>
	);
};

export default LessonPage;
