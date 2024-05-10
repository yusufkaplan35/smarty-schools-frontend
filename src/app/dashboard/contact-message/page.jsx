import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import ContactMessageList from "@/components/dashboard/contact-message/contact-message-list";
import { getAllContactMessagesByPage } from "@/services/contact-services";
import React from "react";

const ContactMessagePage = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllContactMessagesByPage(page);
	const data = await res.json();
	if (!res.ok) throw new Error(data.message);

	data.content = data.content.map((item, index) => ({ ...item, id: index }));


	return (
		<>
			<PageHeader>Admin</PageHeader>
			<Spacer height={70} />
			<ContactMessageList data={data} />
			<Spacer />
		</>
	);
};

export default ContactMessagePage;
