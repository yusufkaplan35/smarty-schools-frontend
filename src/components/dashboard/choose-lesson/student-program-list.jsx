"use client";
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import { formatTimeLT } from "@/helpers/date-time";
import { capitalizeFirstLetter } from "@/helpers/misc";
import React from "react";
import { Container } from "react-bootstrap";

const StudentProgramList = ({ studentPrograms }) => {
	const handleLessonNames = (row) => {
		return row.lessonName.map((item) => item.lessonName).join("-");
	};

	const handleTeacherNames = (row) => {
		return row.teachers.map((item) => item.name).join("-");
	};

	const handleDay = (row) => {
		return capitalizeFirstLetter(row.day);
	};

	const handleTime = (row) => {
		return `${formatTimeLT(row.startTime)} - ${formatTimeLT(row.stopTime)}`;
	};

	return (
		<Container>
			<DataTable
				name="studentProgramList"
				title="Student Programs"
				dataSource={studentPrograms}
				dataKey="lessonProgramId"
			>
				<Column template={handleLessonNames}>Program</Column>
				<Column template={handleTeacherNames}>Teacher</Column>
				<Column template={handleDay}>Day</Column>
				<Column template={handleTime}>Start-End</Column>
			</DataTable>
		</Container>
	);
};

export default StudentProgramList;
