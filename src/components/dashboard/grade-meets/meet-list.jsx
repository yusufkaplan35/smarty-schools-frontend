"use client";
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import { formatDateLL, formatTimeLT } from "@/helpers/date-time";
import { capitalizeFirstLetter } from "@/helpers/misc";
import React from "react";
import { Container } from "react-bootstrap";

const MeetList = ({ meets }) => {
	const handleDate = (row) => {
		return formatDateLL(row.date);
	};


	const handleTime = (row) => {
		return `${formatTimeLT(row.startTime)} - ${formatTimeLT(row.stopTime)}`;
	};

	return (
		<Container>
			<DataTable
				name="meetList"
				title="Meets"
				dataSource={meets}
				dataKey="id"
			>
				<Column dataField="teacherName">Teacher</Column>
				<Column template={handleDate}>Date</Column>
				<Column template={handleTime}>Start-End</Column>
				<Column dataField="description">Notes</Column>
			</DataTable>
		</Container>
	);
};

export default MeetList;
