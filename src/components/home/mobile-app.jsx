import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TfiAndroid, TfiApple } from "react-icons/tfi"
import "./mobile-app.scss";

const MobileApp = () => {
	return (
		<Container className="mobile-app">
			<Row className="g-3 text-center align-items-center">
				<Col lg={7} className="text-lg-start">
					<h2>Are you ready to start your online course</h2>
				</Col>
				<Col lg={5} className="text-lg-end">
					<a href="#" className="btn btn-outline-secondary me-2">
						<TfiApple/> Apple Store
					</a>

					<a href="#" className="btn btn-outline-secondary">
						<TfiAndroid/> Play Store
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default MobileApp;
