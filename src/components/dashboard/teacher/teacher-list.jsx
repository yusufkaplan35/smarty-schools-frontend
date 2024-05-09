"use client"
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import TeacherToolbar from "./teacher-toolbar";

const TeacherList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	const handleToolbar = (row) => {
		return <TeacherToolbar row={row} />;
	};

	return (
		<Container>
			<Link href="/dashboard/teacher/new" className="btn btn-primary mb-3">
				New
			</Link>

			<DataTable
				name="teacherList"
				title="Teacher List"
				dataSource={content}
				dataKey="userId"
				totalPages={totalPages}
				currentPage={number}
				pageSize={size}
			>
				<Column index={true}>#</Column>
				<Column dataField="name">First name</Column>
				<Column dataField="surname">Last name</Column>
				<Column dataField="ssn">SSN</Column>
				<Column dataField="username">Username</Column>
				<Column template={handleToolbar}></Column>
			</DataTable>
		</Container>
	);
};

export default TeacherList;
