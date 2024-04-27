"use client";
import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import {
	TfiUser,
	TfiEmail,
	TfiTag,
	TfiLocationArrow,
	TfiComment,
} from "react-icons/tfi";
import "./contact-form.scss";
import { createContactMessageAction } from "@/actions/contact-actions";
import { initialResponse } from "@/helpers/form-validation";
import { useFormState } from "react-dom";

const ContactForm = () => {
	const [state, dispatch] = useFormState(
		createContactMessageAction,
		initialResponse
	);

	return (
		<div className="contact-form">
			<h2>Send Me Message</h2>

			<Form action={dispatch}>
				<Row>
					<Col md={6}>
						<InputGroup className="mb-3" size="lg">
							<InputGroup.Text id="name">
								<TfiUser />
							</InputGroup.Text>
							<Form.Control
                                name="name"
								placeholder="Your name"
								aria-label="Your name"
								aria-describedby="name"
							/>
						</InputGroup>
					</Col>
					<Col md={6}>
						<InputGroup className="mb-3" size="lg">
							<InputGroup.Text id="email">
								<TfiEmail />
							</InputGroup.Text>
							<Form.Control
                                name="email"
								placeholder="Email"
								aria-label="Email"
								aria-describedby="email"
							/>
						</InputGroup>
					</Col>
					<Col xs={12}>
						<InputGroup className="mb-3" size="lg">
							<InputGroup.Text id="subject">
								<TfiTag />
							</InputGroup.Text>
							<Form.Control
                                name="subject"
								placeholder="Subject"
								aria-label="subject"
								aria-describedby="subject"
							/>
						</InputGroup>
					</Col>
					<Col xs={12}>
						<InputGroup className="mb-3" size="lg">
							<InputGroup.Text id="message">
								<TfiComment />
							</InputGroup.Text>
							<Form.Control
                                name="message"
								as="textarea"
								placeholder="Your message"
								aria-label="Your message"
								aria-describedby="message"
							/>
						</InputGroup>
					</Col>
				</Row>
				<Button type="submit" variant="outline-primary" size="lg">
					<TfiLocationArrow /> Send
				</Button>
			</Form>
		</div>
	);
};

export default ContactForm;
