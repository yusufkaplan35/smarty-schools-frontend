"use client";
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import React from "react";
import { Container } from "react-bootstrap";

const GradeList = ({ grades }) => {
	const { content, totalPages, number, size } = grades;

	const handleAverage = (row) => {
		return row.average.toFixed(2);
	};

	return (
		<Container>
			<DataTable
				name="gradeList"
				title="Grades"
				dataSource={content}
				totalPages={totalPages}
				currentPage={number}
				pageSize={size}
				dataKey="id"
			>
				<Column dataField="lessonName">Lesson</Column>
				<Column dataField="midtermExam">Midterm</Column>
				<Column dataField="finalExam">Final</Column>
				<Column dataField="note">Note</Column>
				<Column template={handleAverage}>Average</Column>
				<Column dataField="absentee">Absentee</Column>
				<Column dataField="infoNote">Info</Column>
			</DataTable>
		</Container>
	);
};

export default GradeList;
