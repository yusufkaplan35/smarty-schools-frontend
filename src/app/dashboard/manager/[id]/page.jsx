import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import ManagerEditForm from "@/components/dashboard/manager/manager-edit-form";
import { getManagerById } from "@/services/manager-service";
import React from "react";

const ManagerEditPage = async ({ params }) => {
	if (!params.id) throw new Error("User id is missing");

	const res = await getManagerById(params.id);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader>Edit Manager</PageHeader>
			<Spacer height={70} />
			<ManagerEditForm user={data.object} />
			<Spacer />
		</>
	);
};

export default ManagerEditPage;
