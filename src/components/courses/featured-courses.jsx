import React from "react";
import Courses from "./courses";
import "./featured-courses.scss";
import SectionTitle from "../common/section-title";

const FeaturedCourses = () => {
	return (
		<div className="featured-courses">
			<SectionTitle>Featured Courses</SectionTitle>
			<Courses featured={true} />
		</div>
	);
};

export default FeaturedCourses;
