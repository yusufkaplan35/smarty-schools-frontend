import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../header/logo";
import { config } from "@/helpers/config";
import MainMenu from "../header/main-menu";
import SocialMedia from "./social-menu";
import ContactMenu from "@/components/contact/contact-menu";
import "./footer.scss";

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row className="g-4">
					<Col xl={4}>
						<Logo type="light" />
						<p className="mt-3">{config.project.description}</p>
					</Col>
					<Col xs={6} lg>
						<h3>Links</h3>
						<MainMenu className="justify-content-center  flex-column flex-grow-1 pe-3" />
					</Col>
					<Col xs={6} lg>
						<h3>Social</h3>
						<SocialMedia className="justify-content-center  flex-column flex-grow-1 pe-3" />
					</Col>
					<Col lg>
						<h3>Contact</h3>
                        <ContactMenu className="justify-content-center  flex-column flex-grow-1 pe-3" />
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
