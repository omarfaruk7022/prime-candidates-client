import React from "react";
import Navber from "../../components/Navber";
import Course from "../../components/Course";
import Footer from "../../components/Footer";

export default function Courses({ courses }) {
  console.log(courses);
  return (
    <Navber>
      <div className="container max-w-[1080px] mx-auto my-5">
        <div>
          <h1 className="text-center my-5">Soft Skill Courses</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mx-5">
          {courses.map((course) => (
            <Course key={course._id} course={course}></Course>
          ))}
        </div>
      </div>
      <Footer />
    </Navber>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://stormy-beach-33232.herokuapp.com/courses");
  const courses = await res.json();

  return {
    props: {
      courses,
    },
  };
};
