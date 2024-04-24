"use client"
import { config } from "@/helpers/config";
import React from "react";
import { Nav } from "react-bootstrap";

const ContactMenu = (props) => {
	return (
		<Nav {...props}>
			<Nav.Link href={`tel:${config.contact.phone1}`}>
				{config.contact.phone1}
			</Nav.Link>
            <Nav.Link href={`tel:${config.contact.phone2}`}>
				{config.contact.phone2}
			</Nav.Link>
            <Nav.Link href={`mailto:${config.contact.email}`}>
				{config.contact.email}
			</Nav.Link>
            <Nav.Link href={config.contact.mapURL} target="_blank">
				{config.contact.address}
			</Nav.Link>
		</Nav>
	);
};

export default ContactMenu;
