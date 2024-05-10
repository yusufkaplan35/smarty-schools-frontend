"use client";
import { deleteStudentInfoAction } from "@/actions/student-info-actions";
import { swAlert, swConfirm } from "@/helpers/swal";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import { TfiPencil, TfiTrash } from "react-icons/tfi";

const StudentInfoToolbar = ({ row }) => {
	const handleDelete = async () => {
		const answer = await swConfirm("Are you sure to delete?");
		if (!answer.isConfirmed) return;

		const res = await deleteStudentInfoAction(row.id);
		if (res.ok) {
			swAlert(res.message, "success");
		} else {
			swAlert(res.message, "error");
		}
	};

	return (
		<>
			<Button
				as={Link}
				variant="none"
				className="btn-link text-info"
				href={`/dashboard/student-info/${row.id}`}
			>
				<TfiPencil />
			</Button>
			<Button className="btn-link" variant="none" onClick={handleDelete}>
				<TfiTrash />
			</Button>
		</>
	);
};

export default StudentInfoToolbar;
