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

const ContactForm = () => {
	return (
		<div>
			<h2>Send Me Message</h2>

			<Row>
				<Form>
					<Col md={6}>
						<InputGroup className="mb-3">
							<InputGroup.Text id="name">
								<TfiUser />
							</InputGroup.Text>
							<Form.Control
								placeholder="Your name"
								aria-label="Your name"
								aria-describedby="name"
							/>
						</InputGroup>
					</Col>
					<Col md={6}>
						<InputGroup className="mb-3">
							<InputGroup.Text id="email">
								<TfiEmail />
							</InputGroup.Text>
							<Form.Control
								placeholder="Email"
								aria-label="Email"
								aria-describedby="email"
							/>
						</InputGroup>
					</Col>
					<Col xs={12}>
						<InputGroup className="mb-3">
							<InputGroup.Text id="subject">
								<TfiTag />
							</InputGroup.Text>
							<Form.Control
								placeholder="Subject"
								aria-label="subject"
								aria-describedby="subject"
							/>
						</InputGroup>
					</Col>
					<Col xs={12}>
						<InputGroup className="mb-3">
							<InputGroup.Text id="message">
								<TfiComment />
							</InputGroup.Text>
							<Form.Control
								as="textarea"
								placeholder="Your message"
								aria-label="Your message"
								aria-describedby="message"
							/>
						</InputGroup>
					</Col>
					<Button type="submit" variant="outline-primary" >
						<TfiLocationArrow /> Send
					</Button>
				</Form>
			</Row>
		</div>
	);
};

export default ContactForm;
