"use client";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ContactForm from "./contact-form";
import ContactMenu from "./contact-menu";
import ContactMap from "./map";
import "./contact.scss";

const Contact = () => {
	return (
		<div className="contact">
			<Container>
				<Card>
					<Card.Body>
						<Row className="g-5">
							<Col lg={8}>
								<ContactForm />
							</Col>
							<Col lg={4}>
								<h2>Get In Touch</h2>
								<ContactMenu className="justify-content-center  flex-column flex-grow-1 pe-3" />
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
			<ContactMap />
		</div>
	);
};

export default Contact;
