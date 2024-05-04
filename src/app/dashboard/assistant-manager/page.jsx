import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import AssistantList from "@/components/dashboard/assistant/assistant-list";
import { getAllAssistantsByPage } from "@/services/assistant-service";
import React from "react";

const AssistantPage = async ({searchParams}) => {
  const { page } = searchParams;

	const res = await getAllAssistantsByPage(page);
	const data = await res.json();
	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader>Assistant</PageHeader>
			<Spacer height={70} />
			<AssistantList data={data} />
			<Spacer />
		</>
	);
};

export default AssistantPage;
