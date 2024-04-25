"use client";
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import { FiDollarSign, FiTrendingUp, FiUser } from "react-icons/fi";
import "./course-card.scss";

const CourseCard = (props) => {
	const { image, title, user, rating, price } = props;

	return (
		<Card className="course-card">
			<Card.Body>
				<Image
					src={`/images/courses/${image}`}
					width={400}
					height={300}
					alt={title}
					className="rounded img-fluid"
				/>

				<Card.Title>{title}</Card.Title>
			</Card.Body>
			<Card.Footer>
				<span>
					<FiUser /> {user}
				</span>
				<span>
					<FiTrendingUp /> {rating}
				</span>
				<span>
					<FiDollarSign /> {price}
				</span>
			</Card.Footer>
		</Card>
	);
};

export default CourseCard;
