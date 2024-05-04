"use client";
import React, { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import { TfiUser } from "react-icons/tfi";
import userMenuData from "@/helpers/data/user-menu.json";
import LogoutButton from "./logout-button";
import { useRouter } from "next/navigation";

const UserMenuAuth = ({ session }) => {
	const [show, setShow] = useState(false);
	const router = useRouter();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const { name, role } = session.user;
	const userMenu = userMenuData[role.toLowerCase()];

	const handleNavigate = (link) => {
		setShow(false);
		router.push(link);
	};

	return (
		<>
			<Button className="btn btn-secondary" onClick={handleShow}>
				<TfiUser /> {name}
			</Button>

			<Offcanvas show={show} onHide={handleClose} data-bs-theme="dark">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>User Menu</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Nav className="flex-column">
						{userMenu.map((item) => (
							<Button
								key={item.link}
								variant="link"
								className="nav-link text-start"
								onClick={() => handleNavigate(item.link)}
							>
								{item.title}
							</Button>
						))}
						<hr />
						<LogoutButton />
					</Nav>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default UserMenuAuth;
