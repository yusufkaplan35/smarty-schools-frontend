"use client";
import { createProgramAction } from "@/actions/program-actions";
import {
	BackButton,
	MultiSelect,
	SelectInput,
	SubmitButton,
	TextInput,
} from "@/components/common/form-fields";
import { config } from "@/helpers/config";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useFormState } from "react-dom";

const ProgramCreateForm = ({ terms, lessons }) => {
	const [state, dispatch] = useFormState(
		createProgramAction,
		initialResponse
	);
	const router = useRouter();

	if (state.ok) {
		swAlert(state.message, "success");
		router.push("/dashboard/program");
	} else if (state.message) {
		swAlert(state.message, "error");
	}

	return (
		<Container>
			<Card>
				<Card.Body>
					<Card.Title>New</Card.Title>

					<Form noValidate action={dispatch}>
						<Row xs={1} md={2} xl={3}>
							<Col>
								<MultiSelect
									name="lessonIdList"
									label="Lessons"
									options={lessons}
									optionValue="lessonId"
									optionLabel="lessonName"
									className="mb-3"
									values=""
									error={state?.errors?.lessonIdList}
								/>
							</Col>
							<Col>
								<SelectInput
									name="educationTermId"
									className="mb-3"
									defaultValue=""
									label="Term"
									options={terms}
									error={state?.errors?.educationTermId}
								/>
							</Col>
							<Col>
								<SelectInput
									name="day"
									className="mb-3"
									defaultValue=""
									label="Day"
									options={config.days}
									error={state?.errors?.day}
								/>
							</Col>
							<Col>
								<TextInput
									type="time"
									name="startTime"
									className="mb-3"
									label="Start time"
									error={state?.errors?.startTime}
								/>
							</Col>
							<Col>
								<TextInput
									type="time"
									name="stopTime"
									className="mb-3"
									label="End time"
									error={state?.errors?.stopTime}
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

export default ProgramCreateForm;
