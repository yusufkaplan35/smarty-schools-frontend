"use client";
import { createMeetAction } from "@/actions/meet-actions";
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

const MeetCreateForm = ({ students }) => {
	const [state, dispatch] = useFormState(createMeetAction, initialResponse);
	const router = useRouter();

	if (state.ok) {
		swAlert(state.message, "success");
		router.push("/dashboard/meet");
	} else if (state.message) {
		swAlert(state.message, "error");
	}

	return (
		<Container>
			<Card>
				<Card.Body>
					<Card.Title>New</Card.Title>

					<Form noValidate action={dispatch}>
						<Row className="align-items-center">
							<Col xs={12}>
								<MultiSelect
									name="studentIds"
									label="Students"
									options={students}
									optionValue="value"
									optionLabel="label"
									className="mb-3"
									values=""
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
								/>
							</Col>
							<Col md={6} lg={4}>
								<TextInput
									type="time"
									name="startTime"
									className="mb-3"
									label="Start"
									error={state?.errors?.startTime}
								/>
							</Col>
							<Col md={6} lg={4}>
								<TextInput
									type="time"
									name="stopTime"
									className="mb-3"
									label="End"
									error={state?.errors?.stopTime}
								/>
							</Col>
							<Col md={6} lg={4}>
								<TextInput
									type="text"
									name="description"
									className="mb-3"
									label="Description"
									error={state?.errors?.description}
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

export default MeetCreateForm;
