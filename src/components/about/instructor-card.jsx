"use client";
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import "./instructor-card.scss";

const InstructorCard = (props) => {
	const { firstName, lastName, image, title } = props;

	const displayName = `${firstName} ${lastName}`;

	return (
		<Card className="instructor-card">
			<Image
				src={`/images/instructors/${image}`}
				width={400}
				height={400}
				alt={displayName}
			/>

			<Card.Title>
				<h4>{displayName}</h4>
				<h6>{title}</h6>
			</Card.Title>
		</Card>
	);
};

export default InstructorCard;
