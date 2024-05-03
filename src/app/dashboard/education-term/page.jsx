import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import TermList from "@/components/dashboard/term/term-list";
import { getAllTermsByPage } from "@/services/term-service";
import React from "react";

const TermPage = async ({searchParams}) => {
  const { page } = searchParams;

	const res = await getAllTermsByPage(page);
	const data = await res.json();
	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader>Term</PageHeader>
			<Spacer height={70} />
			<TermList data={data} />
			<Spacer />
		</>
	);
};

export default TermPage;
