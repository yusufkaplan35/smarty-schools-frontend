import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TfiAndroid, TfiApple } from "react-icons/tfi"

const MobileApp = () => {
	return (
		<Container className="mobile-app">
			<Row className="g-3">
				<Col lg={7}>
					<h2>Are you ready to start your online course</h2>
				</Col>
				<Col lg={3}>
					<a href="#" className="btn btn-outline-secondary">
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
