"use client";
import React from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../common/section-title";
import events from "@/helpers/data/events.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./upcoming-events.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import EventCard from "./event-card";

const upcomingEvents = events.filter(
	(item) => new Date(item.date) >= new Date()
);

const UpcomingEvents = () => {
	return (
		<div className="upcoming-events">
			<Container>
				<div className="title">
					<span className="prev">
						<FaChevronLeft />
					</span>
					<SectionTitle>Upcoming Events</SectionTitle>
					<span className="next">
						<FaChevronRight />
					</span>
				</div>

				<Swiper
					modules={[Navigation]}
					spaceBetween={50}
					slidesPerView={1}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
					breakpoints={{
						576: {
							slidesPerView: 2
						},
						992:{
							slidesPerView: 3
						}
					}}
					navigation={{
						prevEl: ".prev",
						nextEl: ".next"
					}}
				>
					{upcomingEvents.map((item) => (
						<SwiperSlide key={item.id}>
							<EventCard {...item}/>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</div>
	);
};

export default UpcomingEvents;
