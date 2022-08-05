import React from "react";
import course1 from "../images/course1.png";
import man from "../images/Img-icon.png";

const Courses = () => {
  return (
    <div className="container max-w-[1080px] mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-3 rounded-lg  bg-white shadow-lg  shadow-blue-50">
          <div>
            <img src={course1} alt="" />
          </div>
          <div>
            <h1>Effective Lessening</h1>
            <div className="flex gap-3 items-center">
              <img src={man} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
