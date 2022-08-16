import React from "react";
import Navber from "../../components/Navber";
import Course from "../../components/Course";

export default function Courses({ courses }) {
  console.log(courses);
  return (
    <Navber>
      <div className="container max-w-[1080px] mx-auto my-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mx-5">
          {courses.map((course) => (
            <Course key={course._id} course={course}></Course>
          ))}
        </div>
      </div>
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
