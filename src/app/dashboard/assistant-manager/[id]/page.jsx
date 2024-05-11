import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import AssistantEditForm from "@/components/dashboard/assistant/assistant-edit-form";
import { getAssistantById } from "@/services/assistant-service";
import React from "react";

const AssistantEditPage = async ({ params }) => {
	if (!params.id) throw new Error("User id is missing");

	const res = await getAssistantById(params.id);
	const data = await res.json();

	if (!res.ok) throw new Error(data);

	return (
		<>
			<PageHeader>Edit Assistant</PageHeader>
			<Spacer height={70} />
			<AssistantEditForm user={data.object} />
			<Spacer />
		</>
	);
};

export default AssistantEditPage;
