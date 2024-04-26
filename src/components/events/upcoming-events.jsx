"use client";
import React from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../common/section-title";
import events from "@/helpers/data/events.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./upcoming-events.scss";
import { Swiper, SwiperSlide } from "swiper/react";

const upcomingEvents = events.filter(
	(item) => new Date(item.date) >= new Date()
);

const UpcomingEvents = () => {
	return (
		<div className="upcoming-events">
			<Container>
				<div className="title">
					<span>
						<FaChevronLeft />
					</span>
					<SectionTitle>Upcoming Events</SectionTitle>
					<span>
						<FaChevronRight />
					</span>
				</div>

				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{upcomingEvents.map((item) => (
						<SwiperSlide key={item.id}>Slide 1</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</div>
	);
};

export default UpcomingEvents;
