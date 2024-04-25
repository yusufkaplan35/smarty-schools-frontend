import React from "react";
import Courses from "./courses";
import "./featured-courses.scss";

const FeaturedCourses = () => {
	return (
		<div className="featured-courses">
			<h2>Featured Courses</h2>
			<Courses featured={true} />
		</div>
	);
};

export default FeaturedCourses;
