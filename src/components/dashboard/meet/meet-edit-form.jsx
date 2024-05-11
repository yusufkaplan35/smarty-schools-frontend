"use client";
import { updateMeetAction } from "@/actions/meet-actions";
import {
	BackButton,
	MultiSelect,
	SubmitButton,
	TextInput,
} from "@/components/common/form-fields";

import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useFormState } from "react-dom";

const MeetEditForm = ({ meet, currentStudentIds, allStudents }) => {
	const [state, dispatch] = useFormState(updateMeetAction, initialResponse);

	const router = useRouter();

	if (state.ok) {
		swAlert(state.message, "success");
		router.push("/dashboard/meet");
	} else if (state.message) {
		swAlert(state.message, "error");
	}

	console.log(meet, currentStudentIds)

	return (
		<Container>
			<Card>
				<Card.Body>
					<Card.Title>Edit</Card.Title>

					<Form noValidate action={dispatch}>
						<input type="hidden" name="id" value={meet.id}/>
						<Row className="align-items-center">
							<Col xs={12}>
								<MultiSelect
									name="studentIds"
									label="Students"
									options={allStudents}
									optionValue="value"
									optionLabel="label"
									className="mb-3"
									values={currentStudentIds}
									error={state?.errors?.studentIds}
								/>
							</Col>
							<Col md={6} lg={4}>
								<TextInput
									type="date"
									name="date"
									className="mb-3"
									label="Date"
									error={state?.errors?.date}
									defaultValue={meet.date}
								/>
							</Col>
							<Col md={6} lg={4}>
								<TextInput
									type="time"
									name="startTime"
									className="mb-3"
									label="Start"
									error={state?.errors?.startTime}
									defaultValue={meet.startTime}
								/>
							</Col>
							<Col md={6} lg={4}>
								<TextInput
									type="time"
									name="stopTime"
									className="mb-3"
									label="End"
									error={state?.errors?.stopTime}
									defaultValue={meet.stopTime}
								/>
							</Col>
							<Col md={6} lg={4}>
								<TextInput
									type="text"
									name="description"
									className="mb-3"
									label="Description"
									error={state?.errors?.description}
									defaultValue={meet.description}
								/>
							</Col>
						</Row>
						<BackButton /> <SubmitButton />
					</Form>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default MeetEditForm;
