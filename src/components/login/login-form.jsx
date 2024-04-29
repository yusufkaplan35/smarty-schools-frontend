"use client";
import { loginAction } from "@/actions/auth-actions";
import { initialResponse } from "@/helpers/form-validation";
import React from "react";
import {
	Alert,
	Button,
	Card,
	Col,
	Container,
	Form,
	Row,
} from "react-bootstrap";
import { useFormState } from "react-dom";
import "./login-form.scss";
import PasswordInput from "../common/form-fields/password-input";

const LoginForm = () => {
	const [state, dispatch] = useFormState(loginAction, initialResponse);


	return (
		<Container className="login-form">
			<Row className="justify-content-center">
				<Col md={8} lg={6}>
					<Card>
						<Card.Body>
							<h4>Please enter your username and password</h4>

							{state.message ? (
								<Alert variant="danger">{state.message}</Alert>
							) : null}

							<Form action={dispatch} noValidate>
								<Form.Group
									className="mb-3"
									controlId="username"
								>
									<Form.Label>Username</Form.Label>
									<Form.Control
										type="text"
										name="username"
										isInvalid={!!state.errors?.username}
									/>
									<Form.Control.Feedback type="invalid">
										{state.errors?.username}
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group
									className="mb-3"
									controlId="password"
								>
									<Form.Label>Password</Form.Label>
									<PasswordInput
										name="password"
										error={state.errors?.password}
									/>
								</Form.Group>
								<Button type="submit">Login</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default LoginForm;
