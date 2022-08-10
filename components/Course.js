import React from "react";
import Image from "next/image";
import course1 from "../images/course1.png";
import man from "../images/Img-icon.png";
import { AiOutlineTeam } from "react-icons/ai";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import Router from "next/router";

const Course = ({ course }) => {
  const handleCourseDetails = (id) => {
    Router.push(`/courses/${id}`);
  };
  return (
    <>
      <div
        onClick={() => handleCourseDetails(course._id)}
        className=" rounded-lg  bg-white shadow-lg  shadow-blue-50"
      >
        <div>
          <Image
            className="w-full"
            width={600}
            height={400}
            src={course1}
            alt=""
          />
        </div>
        <div className="p-3">
          <h1>{course.courseTitle}</h1>
          <div className="flex gap-3 items-center ">
            <div className="bg-white shadow-lg shadow-blue-50">
              <Image src={man} width={50} height={50} alt="" />
            </div>
            {course.courseInstructor}
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center p-3">
          <div className="flex items-center gap-2">
            <AiOutlineTeam></AiOutlineTeam>
            <h1 className="text-xs">{course.courseEnrolled}</h1>
          </div>
          <div className="flex items-center gap-2">
            <BsFillCalendar2EventFill></BsFillCalendar2EventFill>
            <h1 className="text-xs">{course.courseLesson} Lesson</h1>
          </div>
          <div className="flex items-center gap-2">
            <MdLocationPin></MdLocationPin>
            <h1 className="text-xs">{course.courseduration}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
