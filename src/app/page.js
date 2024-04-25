import Welcome from "@/components/about/welcome";
import Spacer from "@/components/common/spacer";
import FeaturedCourses from "@/components/courses/featured-courses";
import UpcomingEvents from "@/components/events/upcoming-events";
import Slider from "@/components/home/slider";

export default function Home() {
  return (
    <>
      <Slider/>
      <Spacer/>
      <Welcome/>
      <Spacer/>
      <FeaturedCourses/>
      <Spacer/>
      <UpcomingEvents/>
      <Spacer/>
    </>
  );
}
