"use client";
import { deleteManagerAction } from "@/actions/manager-actions";
import { swAlert, swConfirm } from "@/helpers/swal";
import React from "react";
import { TfiTrash } from "react-icons/tfi";

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
		<button className="btn text-danger" onClick={handleDelete}>
			<TfiTrash />
		</button>
	);
};

export default ManagerToolbar;
