"use client";
import React, { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import { TfiUser } from "react-icons/tfi";
import userMenuData from "@/helpers/data/user-menu.json";
import Link from "next/link";
import LogoutButton from "./logout-button";

const UserMenuAuth = ({ session }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const { name, role } = session.user;
	const userMenu = userMenuData[role.toLowerCase()];

	return (
		<>
			<Button className="btn btn-secondary" onClick={handleShow}>
				<TfiUser /> {name}
			</Button>

			<Offcanvas
				show={show}
				onHide={handleClose}
				collapseOnSelect={true}
				data-bs-theme="dark"
			>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>User Menu</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Nav className="flex-column">
						{userMenu.map((item) => (
							<Nav.Link
								href={item.link}
								as={Link}
								key={item.link}
							>
								{item.title}
							</Nav.Link>
						))}
                        <hr/>
						<LogoutButton/>
					</Nav>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default UserMenuAuth;
