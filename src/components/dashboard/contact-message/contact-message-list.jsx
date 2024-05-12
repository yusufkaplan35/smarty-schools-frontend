"use client"
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import { formatDateLL } from "@/helpers/date-time";
import React from "react";
import { Container } from "react-bootstrap";

const ContactMessageList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	const handleDate = (row) => formatDateLL(row.date)

	// Eget tek kelime olarak co uzun birsey girilmisse sutunu cok genisletmesin diye 
	const handleSubject = (row) => {
		const arr = row.subject.split(" ");
		return arr.map(item=> item.length>20 ? item.slice(0,20): item).join(" ")
	}
	const handleMessage = (row) => {
		const arr = row.message.split(" ");
		return arr.map(item=> item.length>20 ? item.slice(0,20): item).join(" ")
	}

	

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
				<Column template={handleSubject}>Subject</Column>
				<Column dataField="email">Email</Column>
				<Column template={handleDate}>Date</Column>
				<Column template={handleMessage}>Message</Column>
			</DataTable>
		</Container>
	);
};

export default ContactMessageList;
