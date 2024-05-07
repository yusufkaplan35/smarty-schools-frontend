import {
	DataTable,
	SelectInput,
	SubmitButton,
} from "@/components/common/form-fields";
import { Column } from "@/components/common/form-fields/data-table";
import Spacer from "@/components/common/spacer";
import { config } from "@/helpers/config";
import { formatTimeLT } from "@/helpers/date-time";
import React from "react";
import { Container, Form } from "react-bootstrap";

const UnassignedProgramlist = ({ programs, teachers }) => {
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
			<Form>
				<DataTable
					title="Unassigned programs"
					dataSource={programs}
					dataKey="lessonProgramId"
          selectionMode="single"
				>
					<Column index={true}>#</Column>
					<Column template={handleLessonNames}>Lessons</Column>
					<Column template={handleDay}>Day</Column>
					<Column template={handleTime}>Start/End</Column>
				</DataTable>
				<Spacer height={20} />

				<div className="d-flex align-items-end gap-2 ">
					<SelectInput
						options={teachers}
						label="Teacher"
						defaultValue=""
					/>
					<SubmitButton title="Assign" />
				</div>
			</Form>
		</Container>
	);
};

export default UnassignedProgramlist;
