import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import AssistantToolbar from "./assistant-toolbar";

const AssistantList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	const handleToolbar = (row) => {
		return <AssistantToolbar row={row} />;
	};

	return (
		<Container>
			<Link href="/dashboard/assistant-manager/new" className="btn btn-primary mb-3">
				New
			</Link>

			<DataTable
				title="Assistant List"
				dataSource={content}
				dataKey="id"
				totalPages={totalPages}
				currentPage={number}
				pageSize={size}
			>
				<Column index={true}>#</Column>
				<Column dataField="name">First name</Column>
				<Column dataField="surname">Last name</Column>
				<Column dataField="username">Username</Column>
				<Column template={handleToolbar}></Column>
			</DataTable>
		</Container>
	);
};

export default AssistantList;
