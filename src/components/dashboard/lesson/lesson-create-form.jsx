"use client";
import { createLessonAction } from "@/actions/lesson-actions";
import {
	BackButton,
	Checkbox,
	SubmitButton,
	TextInput,
} from "@/components/common/form-fields";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useFormState } from "react-dom";

const LessonCreateForm = () => {
	const [state, dispatch] = useFormState(createLessonAction, initialResponse);
	const router = useRouter();

	if (state.ok) {
		swAlert(state.message, "success");
		router.push("/dashboard/lesson");
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
								<TextInput
									type="text"
									name="lessonName"
									className="mb-3"
									label="Name"
									error={state?.errors?.lessonName}
								/>
							</Col>
							<Col>
								<TextInput
									type="number"
									name="creditScore"
									className="mb-3"
									label="Credit"
									error={state?.errors?.creditScore}
								/>
							</Col>
							<Col>
								<Checkbox
									name="compulsory"
									className="mb-3"
									label="Compulsory"
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

export default LessonCreateForm;
