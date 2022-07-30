import React from "react";
import Image from "next/image";
import manIcon from "../images/Img-icon.png";
import { FaToolbox } from "react-icons/fa";

const FeaturedJob = () => {
  return (
    <div className="bg-base-200 pt-6 pb-12">
      <div className="container max-w-[1080px] mx-auto">
        <div>
          <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold my-8">
            Featured Job
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5">
          <div className="flex gap-5 items-center p-3 rounded-lg border-base-100 border-[1px]">
            <div className="bg-base-100 rounded-md h-full flex items-center">
              <Image src={manIcon} alt="" />
            </div>
            <div className="flex flex-col justify-items-start gap-2 w-full">
              <div className="flex gap-2 items-center">
                <h1 className="text-xs sm:text-sm lg:text-xl font-semibold">
                  Junior Graphics Designer
                </h1>
                <p className="text-[10px] text-success">Featured</p>
              </div>
              <div className="flex gap-2 justify-between items-center">
                <div className="flex gap-2 items-center">
                  <FaToolbox className="text-[8px]" />
                  <p className="text-[8px]">design, development</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaToolbox className="text-[8px]" />
                  <p className="text-[8px]">Dhaka</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaToolbox className="text-[8px]" />
                  <p className="text-[8px]">15000 - 25000 /month</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <h1 className="bg-success bg-opacity-20 px-3 py-1 text-[8px] font-thin rounded-xl">
                  Full-Time
                </h1>
                <h1 className="bg-info bg-opacity-20 px-3 py-1 text-[8px] font-thin rounded-xl">
                  Intern
                </h1>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center p-3 rounded-lg border-base-100 border-[1px]">
            <div className="bg-base-100 rounded-md h-full flex items-center">
              <Image src={manIcon} alt="" />
            </div>
            <div className="flex flex-col justify-items-start gap-2 w-full">
              <div className="flex gap-2 items-center">
                <h1 className="text-xs sm:text-sm lg:text-xl font-semibold">
                  Junior Graphics Designer
                </h1>
                <p className="text-[10px] text-success">Featured</p>
              </div>
              <div className="flex gap-2 justify-between items-center">
                <div className="flex gap-2 items-center">
                  <FaToolbox className="text-[8px]" />
                  <p className="text-[8px]">design, development</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaToolbox className="text-[8px]" />
                  <p className="text-[8px]">Dhaka</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaToolbox className="text-[8px]" />
                  <p className="text-[8px]">15000 - 25000 /month</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <h1 className="bg-success bg-opacity-20 px-3 py-1 text-[8px] font-thin rounded-xl">
                  Full-Time
                </h1>
                <h1 className="bg-info bg-opacity-20 px-3 py-1 text-[8px] font-thin rounded-xl">
                  Intern
                </h1>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center p-3 rounded-lg border-base-100 border-[1px]">
            <div className="bg-base-100 rounded-md h-full flex items-center">
              <Image src={manIcon} alt="" />
            </div>
            <div className="flex flex-col justify-items-start gap-2 w-full">
              <div className="flex gap-2 items-center">
                <h1 className="text-xs sm:text-sm lg:text-xl font-semibold">
                  Junior Graphics Designer
                </h1>
                <p className="text-[10px] text-success">Featured</p>
              </div>
              <div className="flex gap-2 justify-between items-center">
                <div className="flex gap-2 items-center">
                  <FaToolbox className="text-[8px]" />
                  <p className="text-[8px]">design, development</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaToolbox className="text-[8px]" />
                  <p className="text-[8px]">Dhaka</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaToolbox className="text-[8px]" />
                  <p className="text-[8px]">15000 - 25000 /month</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <h1 className="bg-success bg-opacity-20 px-3 py-1 text-[8px] font-thin rounded-xl">
                  Full-Time
                </h1>
                <h1 className="bg-info bg-opacity-20 px-3 py-1 text-[8px] font-thin rounded-xl">
                  Intern
                </h1>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center p-3 rounded-lg border-base-100 border-[1px]">
            <div className="bg-base-100 rounded-md h-full flex items-center">
              <Image src={manIcon} alt="" />
            </div>
            <div className="flex flex-col justify-items-start gap-2 w-full">
              <div className="flex gap-2 items-center">
                <h1 className="text-xs sm:text-sm lg:text-xl font-semibold">
                  Junior Graphics Designer
                </h1>
                <p className="text-[10px] text-success">Featured</p>
              </div>
              <div className="flex gap-2 justify-between items-center">
                <div className="flex gap-2 items-center">
                  <FaToolbox className="text-[8px]" />
                  <p className="text-[8px]">design, development</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaToolbox className="text-[8px]" />
                  <p className="text-[8px]">Dhaka</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaToolbox className="text-[8px]" />
                  <p className="text-[8px]">15000 - 25000 /month</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <h1 className="bg-success bg-opacity-20 px-3 py-1 text-[8px] font-thin rounded-xl">
                  Full-Time
                </h1>
                <h1 className="bg-info bg-opacity-20 px-3 py-1 text-[8px] font-thin rounded-xl">
                  Intern
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
