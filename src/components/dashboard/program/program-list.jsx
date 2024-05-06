import DataTable, { Column } from "@/components/common/form-fields/data-table";
import { config } from "@/helpers/config";
import { formatTimeLT } from "@/helpers/date-time";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import ProgramToolbar from "./program-toolbar";

const ProgramList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	console.log(content);

	const handleLessonNames = (row) => {
		return row.lessonName.map((item) => item.lessonName).join("-");
	};

	const handleDay = (row) => {
		return config.days.find((item) => item.value === row.day).label;
	};

	const handleTime = (row) => {
		return `${formatTimeLT(row.startTime)} - ${formatTimeLT(row.stopTime)}`;
	};

	const handleToolbar = (row) => {
		return <ProgramToolbar row={row} />;
	};

	return (
		<Container>
			<Link
				href="/dashboard/program/new"
				className="btn btn-primary mb-3"
			>
				New
			</Link>

			<DataTable
				title="All programs"
				dataSource={content}
				dataKey="lessonProgramId"
				totalPages={totalPages}
				currentPage={number}
				pageSize={size}
			>
				<Column index={true}>#</Column>
				<Column template={handleLessonNames}>Lessons</Column>
				<Column template={handleDay}>Day</Column>
				<Column template={handleTime}>Time</Column>
				<Column template={handleToolbar}></Column>
			</DataTable>
		</Container>
	);
};

export default ProgramList;
