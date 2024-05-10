"use client";
import { createStudentInfoAction } from "@/actions/student-info-actions";
import {
	BackButton,
	SelectInput,
	SubmitButton,
	TextInput,
} from "@/components/common/form-fields";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useFormState } from "react-dom";

const StudentInfoCreateForm = ({ students, lessons, terms }) => {
	const [state, dispatch] = useFormState(
		createStudentInfoAction,
		initialResponse
	);
	const router = useRouter();

	if (state.ok) {
		swAlert(state.message, "success");
		router.push("/dashboard/student-info");
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
								<SelectInput
									name="lessonId"
									className="mb-3"
									defaultValue=""
									label="Lesson"
									options={lessons}
									error={state?.errors?.lessonId}
								/>
							</Col>
							<Col>
								<SelectInput
									name="studentId"
									className="mb-3"
									defaultValue=""
									label="Student"
									options={students}
									error={state?.errors?.studentId}
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
								<TextInput
									type="number"
									name="absentee"
									className="mb-3"
									label="Absentee"
									error={state?.errors?.absentee}
								/>
							</Col>
							<Col>
								<TextInput
									type="number"
									name="midtermExam"
									className="mb-3"
									label="Midterm"
									error={state?.errors?.midtermExam}
								/>
							</Col>
							<Col>
								<TextInput
									type="number"
									name="finalExam"
									className="mb-3"
									label="Final"
									error={state?.errors?.finalExam}
								/>
							</Col>
							<Col>
								<TextInput
									type="text"
									name="infoNote"
									className="mb-3"
									label="Info"
									error={state?.errors?.infoNote}
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

export default StudentInfoCreateForm;
