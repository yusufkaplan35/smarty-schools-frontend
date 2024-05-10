"use client";
import { deleteProgramAction } from "@/actions/program-actions";
import { swAlert, swConfirm } from "@/helpers/swal";
import React from "react";
import { Button } from "react-bootstrap";
import { TfiTrash } from "react-icons/tfi";

const ProgramToolbar = ({ row }) => {
	const handleDelete = async () => {
		const answer = await swConfirm("Are you sure to delete?");
		if (!answer.isConfirmed) return;

		const res = await deleteProgramAction(row.lessonProgramId);
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

export default ProgramToolbar;
