"use client";
import { updateStudentAction } from "@/actions/student-actions";
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

const StudentEditForm = ({ student, advisorTeachers }) => {
	const [state, dispatch] = useFormState(
		updateStudentAction,
		initialResponse
	);
	const router = useRouter();

	if (state.ok) {
		swAlert(state.message, "success");
		router.push("/dashboard/student");
	} else if (state.message) {
		swAlert(state.message, "error");
	}

	return (
		<Container>
			<Card>
				<Card.Body>
					<Card.Title>New</Card.Title>

					<Form noValidate action={dispatch}>
						<input type="hidden" name="id" value={student.id}/>
						<Row xs={1} md={2} xl={3}>
							<Col>
								<TextInput
									type="text"
									name="name"
									className="mb-3"
									label="FirstName"
									error={state?.errors?.name}
									defaultValue={student.name}
								/>
							</Col>
							<Col>
								<TextInput
									type="text"
									name="surname"
									className="mb-3"
									label="LastName"
									error={state?.errors?.surname}
									defaultValue={student.surname}
								/>
							</Col>
							<Col>
								<SelectInput
									name="gender"
									className="mb-3"
									label="Gender"
									options={config.genders}
									optionLabel="label"
									optionValue="value"
									error={state?.errors?.gender}
									defaultValue={student.gender}
								/>
							</Col>
							<Col>
								<TextInput
									type="date"
									name="birthDay"
									className="mb-3"
									label="Birth date"
									error={state?.errors?.birthDay}
									defaultValue={student.birthDay}
								/>
							</Col>
							<Col>
								<TextInput
									type="text"
									name="birthPlace"
									className="mb-3"
									label="Place of birth"
									error={state?.errors?.birthPlace}
									defaultValue={student.birthPlace}
								/>
							</Col>
							<Col>
								<MaskedInput
									name="phoneNumber"
									className="mb-3"
									label="Phone number"
									error={state?.errors?.phoneNumber}
									mask="999-999-9999"
									defaultValue={student.phoneNumber}
								/>
							</Col>
							<Col>
								<MaskedInput
									name="ssn"
									className="mb-3"
									label="SSN"
									error={state?.errors?.ssn}
									mask="999-99-9999"
									defaultValue={student.ssn}
								/>
							</Col>
							<Col>
								<TextInput
									type="email"
									name="email"
									className="mb-3"
									label="Email"
									error={state?.errors?.email}
									defaultValue={student.email}
								/>
							</Col>

							<Col>
								<TextInput
									type="text"
									name="motherName"
									className="mb-3"
									label="Mother"
									error={state?.errors?.motherName}
									defaultValue={student.motherName}
								/>
							</Col>
							<Col>
								<TextInput
									type="text"
									name="fatherName"
									className="mb-3"
									label="Father"
									error={state?.errors?.fatherName}
									defaultValue={student.fatherName}
								/>
							</Col>
							<Col>
								<SelectInput
									name="advisorTeacherId"
									className="mb-3"
									defaultValue={student.advisorTeacherId}
									label="Advisor"
									options={advisorTeachers}
									optionLabel="teacherName"
									optionValue="advisorTeacherId"
									error={state?.errors?.advisorTeacherId}
								/>
							</Col>
							<Col>
								<TextInput
									type="text"
									name="username"
									className="mb-3"
									label="Username"
									error={state?.errors?.username}
									defaultValue={student.username}
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

export default StudentEditForm;
