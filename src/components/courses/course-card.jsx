import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import { FiMessageCircle, FiTrendingUp, FiUser } from "react-icons/fi";

const CourseCard = (props) => {
	const { image, title, user, rating, price } = props;

	return (
		<Card>
			<Card.Body>
				<Image
					src={`/images/courses/${image}`}
					width={400}
					height={300}
					alt={title}
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
					<FiMessageCircle /> {price}
				</span>
			</Card.Footer>
		</Card>
	);
};

export default CourseCard;
