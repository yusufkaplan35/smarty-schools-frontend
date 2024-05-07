"use client";
import { assignProgramAction } from "@/actions/teacher-actions";
import {
	DataTable,
	SelectInput,
	SubmitButton,
} from "@/components/common/form-fields";
import { Column } from "@/components/common/form-fields/data-table";
import Spacer from "@/components/common/spacer";
import { config } from "@/helpers/config";
import { formatTimeLT } from "@/helpers/date-time";
import { initialResponse } from "@/helpers/form-validation";
import React from "react";
import { useFormState } from "react-dom";
import { Container, Form } from "react-bootstrap";
import { swAlert } from "@/helpers/swal";

const UnassignedProgramlist = ({ programs, teachers }) => {
	const [state, dispatch] = useFormState(
		assignProgramAction,
		initialResponse
	);

	if (state.ok) {
		swAlert(state.message, "success");
	} else if (state.message) {
		swAlert(state.message, "error");
	}

	const handleLessonNames = (row) => {
		return row.lessonName.map((item) => item.lessonName).join("-");
	};

	const handleDay = (row) => {
		return config.days.find((item) => item.value === row.day).label;
	};

	const handleTime = (row) => {
		return `${formatTimeLT(row.startTime)} - ${formatTimeLT(row.stopTime)}`;
	};

	return (
		<Container>
			<Form noValidate action={dispatch}>
				<DataTable
					name="lessonProgramId"
					title="Unassigned programs"
					dataSource={programs}
					dataKey="lessonProgramId"
					selectionMode="multiple"
					error={state?.errors?.lessonProgramId}
				>
					<Column index={true}>#</Column>
					<Column template={handleLessonNames}>Lessons</Column>
					<Column template={handleDay}>Day</Column>
					<Column template={handleTime}>Start/End</Column>
				</DataTable>
				<Spacer height={20} />

				<div className="d-flex align-items-end gap-2 ">
					<SelectInput
						name="teacherId"
						options={teachers}
						label="Teacher"
						defaultValue=""
						error={state?.errors?.teacherId}
					/>
					<SubmitButton title="Assign" />
				</div>
			</Form>
		</Container>
	);
};

export default UnassignedProgramlist;
