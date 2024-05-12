import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import AssistantCreateForm from "@/components/dashboard/assistant/assistant-create-form";
import { wait } from "@/helpers/misc";
import React from "react";

const AssistantCreatePage = async () => {
	await wait(3);
	return (
		<>
			<PageHeader>New Assistant</PageHeader>
			<Spacer height={70} />
			<AssistantCreateForm />
			<Spacer />
		</>
	);
};

export default AssistantCreatePage;
