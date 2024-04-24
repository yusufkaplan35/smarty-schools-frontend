import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Logo from "./logo";

const MainMenuBar = () => {
	return (
		<Navbar expand="lg" className="bg-body-tertiary mb-3">
			<Container fluid>
				<Logo />
				<Navbar.Toggle aria-controls="main-menu" />
				<Navbar.Offcanvas
					id="main-menu"
					aria-labelledby="main-menu-label"
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id="main-menu-label">
							Offcanvas
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Nav.Link href="#action1">Home</Nav.Link>
							<Nav.Link href="#action2">Link</Nav.Link>
							<NavDropdown
								title="Dropdown"
								id={`offcanvasNavbarDropdown-expand-${expand}`}
							>
								<NavDropdown.Item href="#action3">
									Action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">
									Something else here
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default MainMenuBar;
