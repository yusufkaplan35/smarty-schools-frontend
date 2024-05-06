"use client";
import { deleteManagerAction } from "@/actions/manager-actions";
import { swAlert, swConfirm } from "@/helpers/swal";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import { TfiPencil, TfiTrash } from "react-icons/tfi";

const ManagerToolbar = ({ row }) => {
	const handleDelete = async () => {
		const answer = await swConfirm("Are you sure to delete?");
		if (!answer.isConfirmed) return;

		const res = await deleteManagerAction(row.userId);
		if (res.ok) {
			swAlert(res.message, "success");
		} else {
			swAlert(res.message, "error");
		}
	};

	return (
		<>
			<Link
				className="btn text-info"
				href={`/dashboard/manager/${row.userId}`}
			>
				<TfiPencil />
			</Link>
			<Button variant="danger" onClick={handleDelete}>
				<TfiTrash />
			</Button>
		</>
	);
};

export default ManagerToolbar;
