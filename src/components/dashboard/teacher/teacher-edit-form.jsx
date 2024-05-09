"use client";
import { updateTeacherAction } from "@/actions/teacher-actions";
import {
	BackButton,
	Checkbox,
	MaskedInput,
	MultiSelect,
	SelectInput,
	SubmitButton,
	TextInput,
} from "@/components/common/form-fields";

import { config } from "@/helpers/config";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useFormState } from "react-dom";

const TeacherEditForm = ({ teacher, programs }) => {
	const [state, dispatch] = useFormState(
		updateTeacherAction,
		initialResponse
	);

	//const [programIds, setProgramIds] = useState([]);

	const router = useRouter();

	if (state.ok) {
		swAlert(state.message, "success");
		router.push("/dashboard/teacher");
	} else if (state.message) {
		swAlert(state.message, "error");
	}

	/* useEffect(() => {
		const arr = teacher.lessonsProgramList.map((item) => item.id);
		setProgramIds(arr);
	}, []); */

	const programIds = teacher.lessonsProgramList.map((item) => item.id.toString());

	return (
		<Container>
			<Card>
				<Card.Body>
					<Card.Title>Edit</Card.Title>

					<Form noValidate action={dispatch}>
						<input type="hidden" name="id" value={teacher.id}/>
						<Row className="align-items-center">
							<Col md={6} lg={4}>
								<TextInput
									type="text"
									name="name"
									className="mb-3"
									label="FirstName"
									error={state?.errors?.name}
									defaultValue={teacher.name}
								/>
							</Col>
							<Col md={6} lg={4}>
								<TextInput
									type="text"
									name="surname"
									className="mb-3"
									label="LastName"
									error={state?.errors?.surname}
									defaultValue={teacher.surname}
								/>
							</Col>
							<Col md={6} lg={4}>
								<SelectInput
									name="gender"
									className="mb-3"
									defaultValue={teacher.gender}
									label="Gender"
									options={config.genders}
									error={state?.errors?.gender}
								/>
							</Col>
							<Col md={6} lg={4}>
								<TextInput
									type="date"
									name="birthDay"
									className="mb-3"
									label="Birth date"
									error={state?.errors?.birthDay}
									defaultValue={teacher.birthDay}
								/>
							</Col>
							<Col md={6} lg={4}>
								<TextInput
									type="text"
									name="birthPlace"
									className="mb-3"
									label="Place of birth"
									error={state?.errors?.birthPlace}
									defaultValue={teacher.birthPlace}
								/>
							</Col>
							<Col md={6} lg={4}>
								<MaskedInput
									name="phoneNumber"
									className="mb-3"
									label="Phone number"
									error={state?.errors?.phoneNumber}
									mask="999-999-9999"
									defaultValue={teacher.phoneNumber}
								/>
							</Col>
							<Col md={6} lg={4}>
								<MaskedInput
									name="ssn"
									className="mb-3"
									label="SSN"
									error={state?.errors?.ssn}
									mask="999-99-9999"
									defaultValue={teacher.ssn}
								/>
							</Col>
							<Col md={6} lg={4}>
								<TextInput
									type="email"
									name="email"
									className="mb-3"
									label="Email"
									error={state?.errors?.email}
									defaultValue={teacher.email}
								/>
							</Col>
							<Col md={6} lg={4}>
								<Checkbox
									name="isAdvisorTeacher"
									label="Is Advisor Teacher"
									className="mb-3"
									error={state?.errors?.isAdvisorTeacher}
									defaultChecked={teacher.isAdvisor}
								/>
							</Col>
							<Col xs={12}>
								<MultiSelect
									name="lessonsIdList"
									label="Programs"
									options={programs}
									optionValue="id"
									optionLabel="label"
									className="mb-3"
									values={programIds}
									error={state?.errors?.lessonsIdList}
								/>
							</Col>
							<Col md={6} lg={4}>
								<TextInput
									type="text"
									name="username"
									className="mb-3"
									label="Username"
									error={state?.errors?.username}
									defaultValue={teacher.username}
								/>
							</Col>
							<Col md={6} lg={4}>
								<TextInput
									type="password"
									name="password"
									className="mb-3"
									label="Password"
									error={state?.errors?.password}
								/>
							</Col>
							<Col md={6} lg={4}>
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

export default TeacherEditForm;
