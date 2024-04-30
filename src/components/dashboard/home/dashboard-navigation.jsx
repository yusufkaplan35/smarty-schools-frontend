import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import userMenuData from "@/helpers/data/user-menu.json";
import { auth } from "@/auth";

const DashboardNavigation = async () => {
	const session = await auth();
	const userRole = session.user.role.toLowerCase();
	const userMenu = userMenuData[userRole];

	return (
		<Container>
			<Row xs={1} sm={2} md={3} lg={4} className="g-3">
				{userMenu.map((item) => (
					<Col key={item.link}>
						<Link
							href={item.link}
							className="btn btn-outline-secondary w-100 h-100 d-flex align-items-center justify-content-center "
						>
							{item.title}
						</Link>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default DashboardNavigation;
