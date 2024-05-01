import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const AdminList = ({ data }) => {
	const { content, totalPages } = data;

	console.log(data)

	return (
		<Container>
			<Link href="/dashboard/admin/new" className="btn btn-primary mb-3">
				New
			</Link>

			<DataTable
				title="Admin List"
				dataSource={content}
				dataKey="id"
				totalPages={totalPages}
			>
				<Column index={true}>#</Column>
				<Column dataField="name">First name</Column>
				<Column dataField="surname">Last name</Column>
				<Column dataField="username">Username</Column>
			</DataTable>
		</Container>
	);
};

export default AdminList;
