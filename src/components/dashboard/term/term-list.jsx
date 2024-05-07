"use client"
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import TermToolbar from "./term-toolbar";
import { formatDateLL } from "@/helpers/date-time";
import { config } from "@/helpers/config";
import { formatTerm } from "@/helpers/misc";

const TermList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	const handleToolbar = (row) => {
		return <TermToolbar row={row} />;
	};

	

	const formatStart = (row) => formatDateLL(row.startDate);
	const formatEnd = (row) => formatDateLL(row.endDate);
	const formatReg = (row) => formatDateLL(row.lastRegistrationDate);

	return (
		<Container>
			<Link href="/dashboard/education-term/new" className="btn btn-primary mb-3">
				New
			</Link>

			<DataTable
				name="termList"
				title="Term List"
				dataSource={content}
				dataKey="id"
				totalPages={totalPages}
				currentPage={number}
				pageSize={size}
			>
				<Column index={true}>#</Column>
				<Column template={formatTerm}>Term</Column>
				<Column template={formatStart}>Start</Column>
				<Column template={formatEnd}>End</Column>
				<Column template={formatReg}>Last Registration</Column>
				<Column template={handleToolbar}></Column>
			</DataTable>
		</Container>
	);
};

export default TermList;
