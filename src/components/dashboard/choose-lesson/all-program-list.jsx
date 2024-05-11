"use client";
import { chooseLessonAction } from "@/actions/student-actions";
import { SubmitButton } from "@/components/common/form-fields";
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Spacer from "@/components/common/spacer";
import { formatTimeLT } from "@/helpers/date-time";
import { initialResponse } from "@/helpers/form-validation";
import { capitalizeFirstLetter } from "@/helpers/misc";
import React from "react";
import { useFormState } from "react-dom";
import { Container, Form } from "react-bootstrap";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";

const AllProgramList = ({ allPrograms }) => {
	const [state, dispatch] = useFormState(chooseLessonAction, initialResponse);
    const router = useRouter();

	const handleLessonNames = (row) => {
		return row.lessonName.map((item) => item.lessonName).join("-");
	};

	const handleTeacherNames = (row) => {
		return row.teachers.map((item) => item.name).join("-");
	};

	const handleDay = (row) => {
		return capitalizeFirstLetter(row.day);
	};

	const handleTime = (row) => {
		return `${formatTimeLT(row.startTime)} - ${formatTimeLT(row.stopTime)}`;
	};

    if (state.ok) {
		swAlert(state.message, "success");
	} else if (state.message) {
		swAlert(state.message, "error");
	}

	return (
		<Container>
			<Form action={dispatch} noValidate>
				<DataTable
					name="lessonProgramId"
					title="All Programs"
					dataSource={allPrograms}
					dataKey="lessonProgramId"
					selectionMode="multiple"
                    values={[]}
				>
					<Column template={handleLessonNames}>Program</Column>
					<Column template={handleTeacherNames}>Teacher</Column>
					<Column template={handleDay}>Day</Column>
					<Column template={handleTime}>Start-End</Column>
				</DataTable>
				<Spacer height={20} />

				<div className="text-center">
					<SubmitButton
						title="Select"
						icon="GiTargeted"
						iconfamily="gi"
					/>
				</div>
			</Form>
		</Container>
	);
};

export default AllProgramList;
