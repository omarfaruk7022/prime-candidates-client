import React from "react";
import Image from "next/image";
import course1 from "../images/course1.png";
import man from "../images/Img-icon.png";
import { AiOutlineTeam } from "react-icons/ai";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const Courses = () => {
  return (
    <div className="container max-w-[1080px] mx-auto mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mx-5">
        <div className=" rounded-lg  bg-white shadow-lg  shadow-blue-50">
          <div>
            <Image className="w-full" width={600} src={course1} alt="" />
          </div>
          <div className="p-3">
            <h1>Effective Lessening</h1>
            <div className="flex gap-3 items-center ">
              <div className="bg-white shadow-lg shadow-blue-50">
                <Image src={man} width={50} height={50} alt="" />
              </div>
              John Doe
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center p-3">
            <div className="flex items-center gap-2">
              <AiOutlineTeam></AiOutlineTeam>
              <h1 className="text-xs">8/10</h1>
            </div>
            <div className="flex items-center gap-2">
              <BsFillCalendar2EventFill></BsFillCalendar2EventFill>
              <h1 className="text-xs">Dec 10</h1>
            </div>
            <div className="flex items-center gap-2">
              <MdLocationPin></MdLocationPin>
              <h1 className="text-xs">Dhaka</h1>
            </div>
          </div>
        </div>
        <div className=" rounded-lg  bg-white shadow-lg  shadow-blue-50">
          <div>
            <Image className="w-full" width={600} src={course1} alt="" />
          </div>
          <div className="p-3">
            <h1>Effective Lessening</h1>
            <div className="flex gap-3 items-center ">
              <div className="bg-white shadow-lg shadow-blue-50">
                <Image src={man} width={50} height={50} alt="" />
              </div>
              John Doe
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center p-3">
            <div className="flex items-center gap-2">
              <AiOutlineTeam></AiOutlineTeam>
              <h1 className="text-xs">8/10</h1>
            </div>
            <div className="flex items-center gap-2">
              <BsFillCalendar2EventFill></BsFillCalendar2EventFill>
              <h1 className="text-xs">Dec 10</h1>
            </div>
            <div className="flex items-center gap-2">
              <MdLocationPin></MdLocationPin>
              <h1 className="text-xs">Dhaka</h1>
            </div>
          </div>
        </div>
        <div className=" rounded-lg  bg-white shadow-lg  shadow-blue-50">
          <div>
            <Image className="w-full" width={600} src={course1} alt="" />
          </div>
          <div className="p-3">
            <h1>Effective Lessening</h1>
            <div className="flex gap-3 items-center ">
              <div className="bg-white shadow-lg shadow-blue-50">
                <Image src={man} width={50} height={50} alt="" />
              </div>
              John Doe
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center p-3">
            <div className="flex items-center gap-2">
              <AiOutlineTeam></AiOutlineTeam>
              <h1 className="text-xs">8/10</h1>
            </div>
            <div className="flex items-center gap-2">
              <BsFillCalendar2EventFill></BsFillCalendar2EventFill>
              <h1 className="text-xs">Dec 10</h1>
            </div>
            <div className="flex items-center gap-2">
              <MdLocationPin></MdLocationPin>
              <h1 className="text-xs">Dhaka</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
