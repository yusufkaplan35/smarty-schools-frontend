import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import LessonToolbar from "./lesson-toolbar";
import { TfiCheck, TfiMinus } from "react-icons/tfi";

const LessonList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	const handleToolbar = (row) => {
		return <LessonToolbar row={row} />;
	};

	const handleCompulsory = (row) => {
		return row.compulsory ? <TfiCheck /> : <TfiMinus />;
	};

	return (
		<Container>
			<Link href="/dashboard/lesson/new" className="btn btn-primary mb-3">
				New
			</Link>

			<DataTable
				title="Lesson List"
				dataSource={content}
				dataKey="lessonId"
				totalPages={totalPages}
				currentPage={number}
				pageSize={size}
			>
				<Column index={true}>#</Column>
				<Column dataField="lessonName">Lesson</Column>
				<Column dataField="creditScore">Credit</Column>
				<Column template={handleCompulsory}>Compulsory</Column>
				<Column template={handleToolbar}></Column>
			</DataTable>
		</Container>
	);
};

export default LessonList;
