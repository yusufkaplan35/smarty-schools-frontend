import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const AdminList = () => {
	const arr = [
		{ id: 3, firstName: "Ali", lastName: "Gel" },
		{ id: 5, firstName: "Veli", lastName: "Git" },
	];

	return (
		<Container>
			<Link href="/dashboard/admin/new" className="btn btn-primary mb-3">
				New
			</Link>

			<DataTable title="Admin List" dataSource={arr} dataKey="id">
				<Column dataField="firstName">First name</Column>
				<Column dataField="lastName">Last name</Column>
				<Column dataField="userName">Username</Column>
			</DataTable>
		</Container>
	);
};

export default AdminList;
