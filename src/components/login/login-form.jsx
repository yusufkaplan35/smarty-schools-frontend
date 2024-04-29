import { loginAction } from "@/actions/auth-actions";
import { initialResponse } from "@/helpers/form-validation";
import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useFormState } from "react-dom";

const LoginForm = () => {
	const [state, dispatch] = useFormState(loginAction, initialResponse);

	return (
		<Container className="login-form">
			<Row>
				<Col md={8} lg={6}>
					<Card>
						<Card.Body>
							<h4>Please enter your username and password</h4>

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
									<Form.Control
										type="password"
										name="password"
										isInvalid={!!state.errors?.password}
									/>
									<Form.Control.Feedback type="invalid">
										{state.errors?.password}
									</Form.Control.Feedback>
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
