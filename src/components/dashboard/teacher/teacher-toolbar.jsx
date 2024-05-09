"use client";
import { deleteTeacherAction } from "@/actions/teacher-actions";
import { swAlert, swConfirm } from "@/helpers/swal";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import { TfiPencil, TfiTrash } from "react-icons/tfi";

const TeacherToolbar = ({ row }) => {
	const handleDelete = async () => {
		const answer = await swConfirm("Are you sure to delete?");
		if (!answer.isConfirmed) return;

		const res = await deleteTeacherAction(row.userId);
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
				href={`/dashboard/teacher/${row.userId}`}
			>
				<TfiPencil />
			</Button>
			<Button className="btn-link" variant="none" onClick={handleDelete}>
				<TfiTrash />
			</Button>
		</>
	);
};

export default TeacherToolbar;
