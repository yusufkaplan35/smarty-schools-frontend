"use client";
import { createAdminAction } from "@/actions/admin-actions";
import {
	BackButton,
	MaskedInput,
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

const AdminCreateForm = () => {
	const [state, dispatch] = useFormState(createAdminAction, initialResponse);
	const router = useRouter();

	if (state.ok) {
		swAlert(state.message, "success");
		router.push("/dashboard/admin");
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
									name="name"
									className="mb-3"
									label="FirstName"
									error={state?.errors?.name}
								/>
							</Col>
							<Col>
								<TextInput
									type="text"
									name="surname"
									className="mb-3"
									label="LastName"
									error={state?.errors?.surname}
								/>
							</Col>
							<Col>
								<SelectInput
									name="gender"
									className="mb-3"
									label="Gender"
									defaultValue=""
									options={config.genders}
									optionLabel="label"
									optionValue="value"
									error={state?.errors?.gender}
								/>
							</Col>
							<Col>
								<TextInput
									type="date"
									name="birthDay"
									className="mb-3"
									label="Birth date"
									error={state?.errors?.birthDay}
								/>
							</Col>
							<Col>
								<TextInput
									type="text"
									name="birthPlace"
									className="mb-3"
									label="Place of birth"
									error={state?.errors?.birthPlace}
								/>
							</Col>
							<Col>
								<MaskedInput
									name="phoneNumber"
									className="mb-3"
									label="Phone number"
									error={state?.errors?.phoneNumber}
									mask="999-999-9999"
								/>
							</Col>
							<Col>
								<MaskedInput
									name="ssn"
									className="mb-3"
									label="SSN"
									error={state?.errors?.ssn}
									mask="999-99-9999"
								/>
							</Col>
							<Col>
								<TextInput
									type="text"
									name="username"
									className="mb-3"
									label="Username"
									error={state?.errors?.username}
								/>
							</Col>
							<Col>
								<TextInput
									type="password"
									name="password"
									className="mb-3"
									label="Password"
									error={state?.errors?.password}
								/>
							</Col>
							<Col>
								<TextInput
									type="password"
									name="confirmPassword"
									className="mb-3"
									label="Confirm password"
									error={state?.errors?.confirmPassword}
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

export default AdminCreateForm;
