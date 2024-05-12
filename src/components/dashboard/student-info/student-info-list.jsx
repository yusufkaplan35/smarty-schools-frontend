"use client";
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import StudentInfoToolbar from "./student-info-toolbar";

const StudentInfoList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	const handleToolbar = (row) => {
		return <StudentInfoToolbar row={row} />;
	};

	const handleStudentName = (row) => {
		const { name, surname } = row.studentResponse;
		return `${name} ${surname}`;
	};

	const handleAverage = (row) => { 
		return row.average.toFixed(2)
	 }

	return (
		<Container>
			<Link
				href="/dashboard/student-info/new"
				className="btn btn-primary mb-3"
			>
				New
			</Link>

			<DataTable
				name="studentInfoList"
				title="Info List"
				dataSource={content}
				dataKey="id"
				totalPages={totalPages}
				currentPage={number}
				pageSize={size}
			>
				<Column index={true}>#</Column>
				<Column template={handleStudentName}>Student</Column>
				<Column dataField="lessonName">Lesson</Column>
				<Column dataField="absentee">Absentee</Column>
				<Column dataField="midtermExam">Midterm</Column>
				<Column dataField="finalExam">Final</Column>
				<Column template={handleAverage}>Average</Column>
				<Column dataField="note">Note</Column>
				<Column dataField="infoNote">Info</Column>
				<Column template={handleToolbar}></Column>
			</DataTable>
		</Container>
	);
};

export default StudentInfoList;
