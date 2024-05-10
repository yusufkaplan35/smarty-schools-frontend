"use client"
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import { formatDateLL } from "@/helpers/date-time";
import React from "react";
import { Container } from "react-bootstrap";

const ContactMessageList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	const handleDate = (row) => formatDateLL(row.date)

	return (
		<Container>
			
			<DataTable
				name="contactMessageList"
				title="Contact Message List"
				dataSource={content}
				dataKey="id"
				totalPages={totalPages}
				currentPage={number}
				pageSize={size}
			>
				<Column index={true}>#</Column>
				<Column dataField="name">Name</Column>
				<Column dataField="subject">Subject</Column>
				<Column dataField="email">Email</Column>
				<Column template={handleDate}>Date</Column>
				<Column dataField="message">Message</Column>
			</DataTable>
		</Container>
	);
};

export default ContactMessageList;
