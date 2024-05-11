"use client";
import React from "react";
import { Card, Container, Placeholder, Table } from "react-bootstrap";

const LoadingList = ({
	title = "",
	colCount = 4,
	rowCount = 5,
	showButton = true,
}) => {
	return (
		<Container>
			{showButton ? (
				<Placeholder animation="glow">
					<Placeholder xs={2} bg="dark" className="btn mb-3" />
				</Placeholder>
			) : null}

			<Card>
				<Card.Body>
					<Card.Title style={{ fontSize: "1.7rem" }}>
						{title}
					</Card.Title>

					<Table className="table-striped">
						<thead>
							<tr>
								{[...new Array(colCount)].map((_, index) => (
									<Placeholder
										as="th"
										animation="glow"
										key={index}
									>
										<Placeholder xs={12} bg="dark" />
									</Placeholder>
								))}
							</tr>
						</thead>
						<tbody>
							{[...new Array(rowCount)].map((_, indexRow) => (
								<tr key={indexRow}>
									{[...new Array(colCount)].map(
										(_, indexCol) => (
											<Placeholder
												as="td"
												animation="glow"
												key={indexCol}
											>
												<Placeholder
													xs={12}
													bg="warning"
												/>
											</Placeholder>
										)
									)}
								</tr>
							))}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default LoadingList;
