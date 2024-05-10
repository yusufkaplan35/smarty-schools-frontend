"use client";
import { deleteAdminAction } from "@/actions/admin-actions";
import { swAlert, swConfirm } from "@/helpers/swal";
import React from "react";
import { Button } from "react-bootstrap";
import { TfiTrash } from "react-icons/tfi";

const AdminToolbar = ({ row }) => {
	const handleDelete = async () => {
		const answer = await swConfirm("Are you sure to delete?");
		if (!answer.isConfirmed) return;

		const res = await deleteAdminAction(row.id);
		if (res.ok) {
			swAlert(res.message, "success");
		} else {
			swAlert(res.message, "error");
		}
	};

	return (
		<Button className="btn-link" variant="none" onClick={handleDelete}>
			<TfiTrash />
		</Button>
	);
};

export default AdminToolbar;
