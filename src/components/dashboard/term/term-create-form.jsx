"use client";
import { createTermAction } from "@/actions/term-actions";
import BackButton from "@/components/common/form-fields/back-button";
import SelectInput from "@/components/common/form-fields/select-input";
import SubmitButton from "@/components/common/form-fields/submit-button";
import TextInput from "@/components/common/form-fields/text-input";
import { config } from "@/helpers/config";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useFormState } from "react-dom";

const TermCreateForm = () => {
	const [state, dispatch] = useFormState(createTermAction, initialResponse);
	const router = useRouter();

	if (state.ok) {
		swAlert(state.message, "success");
		router.push("/dashboard/education-term");
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
									name="term"
									className="mb-3"
									label="Term"
									options={config.educationTerms}
									error={state?.errors?.term}
								/>
							</Col>
							<Col>
								<TextInput
									type="date"
									name="startDate"
									className="mb-3"
									label="Start"
									error={state?.errors?.startDate}
								/>
							</Col>
							<Col>
								<TextInput
									type="date"
									name="endDate"
									className="mb-3"
									label="End"
									error={state?.errors?.endDate}
								/>
							</Col>
							<Col>
								<TextInput
									type="date"
									name="lastRegistrationDate"
									className="mb-3"
									label="Last registration"
									error={state?.errors?.lastRegistrationDate}
								/>
							</Col>
						</Row>
						<BackButton/> <SubmitButton />
					</Form>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default TermCreateForm;
