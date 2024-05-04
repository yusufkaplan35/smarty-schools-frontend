"use client";
import { deleteLessonAction } from "@/actions/lesson-actions";
import { swAlert, swConfirm } from "@/helpers/swal";
import React from "react";
import { TfiTrash } from "react-icons/tfi";

const LessonToolbar = ({ row }) => {
	const handleDelete = async () => {
		const answer = await swConfirm("Are you sure to delete?");
		if (!answer.isConfirmed) return;

		const res = await deleteLessonAction(row.lessonId);
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

export default LessonToolbar;
