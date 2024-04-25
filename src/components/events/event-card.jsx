"use client";
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import "./event-card.scss";
import { FiClock, FiMapPin } from "react-icons/fi";

const EventCard = (props) => {
	const { image, title, time, location } = props;

	return (
		<Card className="event-card">
			<Card.Body>
				<Image
					src={`/images/events/${image}`}
					width={400}
					height={300}
					alt={title}
					className="rounded img-fluid"
				/>
				<Card.Subtitle>
					<span>
						<FiClock /> {time}
					</span>
					<span>
						<FiMapPin /> {location}
					</span>
				</Card.Subtitle>

				<Card.Title>{title}</Card.Title>
			</Card.Body>
		</Card>
	);
};

export default EventCard;
