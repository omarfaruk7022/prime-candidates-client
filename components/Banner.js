import React, { useEffect, useRef } from "react";
import Navber from "./Navber";
import Image from "next/image";
import jobHiring from "../images/job-hiring.svg";
import { BsArrowDownShort } from "react-icons/bs";

const Banner = () => {
  // const handleFindJob = () => {
  //   <form
  //     className="relative w-screen max-w-lg mx-auto overflow-auto bg-white divide-y divide-gray-100 rounded-lg shadow-2xl"
  //     role="dialog"
  //     aria-label="Filters"
  //   >
  //     <header className="p-6 text-center">
  //       <p className="text-lg font-medium">Search courses</p>
  //     </header>

  //     <main className="flow-root p-6 overflow-y-auto h-96">
  //       <div className="-my-8 divide-y divide-gray-100">
  //         <div className="py-8">
  //           <fieldset>
  //             <legend className="text-xl font-medium">Study Type</legend>

  //             <ul className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
  //               <li>
  //                 <label className="flex items-center text-sm">
  //                   <input type="radio" className="w-6 h-6 border-gray-200" />
  //                   <span className="ml-3 font-medium">Undergraduate</span>
  //                 </label>
  //               </li>

  //               <li>
  //                 <label className="flex items-center text-sm">
  //                   <input
  //                     type="radio"
  //                     className="w-6 h-6 border-gray-200"
  //                     checked
  //                   />
  //                   <span className="ml-3 font-medium">Postgraduate</span>
  //                 </label>
  //               </li>
  //             </ul>
  //           </fieldset>
  //         </div>

  //         <div className="py-8">
  //           <fieldset>
  //             <legend className="text-xl font-medium">Locations</legend>

  //             <ul className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
  //               <li>
  //                 <label className="flex items-center text-sm">
  //                   <input
  //                     type="checkbox"
  //                     className="w-6 h-6 border border-gray-200 rounded-md"
  //                   />
  //                   <span className="ml-3 font-medium">All Regions</span>
  //                 </label>
  //               </li>

  //               <li>
  //                 <label className="flex items-center text-sm">
  //                   <input
  //                     type="checkbox"
  //                     className="w-6 h-6 border border-gray-200 rounded-md"
  //                   />
  //                   <span className="ml-3 font-medium">East Midlands</span>
  //                 </label>
  //               </li>

  //               <li>
  //                 <label className="flex items-center text-sm">
  //                   <input
  //                     type="checkbox"
  //                     className="w-6 h-6 border border-gray-200 rounded-md"
  //                   />
  //                   <span className="ml-3 font-medium">East of England</span>
  //                 </label>
  //               </li>

  //               <li>
  //                 <label className="flex items-center text-sm">
  //                   <input
  //                     type="checkbox"
  //                     className="w-6 h-6 border border-gray-200 rounded-md"
  //                   />
  //                   <span className="ml-3 font-medium">London (Greater)</span>
  //                 </label>
  //               </li>
  //             </ul>
  //           </fieldset>
  //         </div>

  //         <div className="py-8">
  //           <fieldset>
  //             <legend className="text-xl font-medium">Universities</legend>

  //             <ul className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
  //               <li>
  //                 <label className="flex items-center text-sm">
  //                   <input
  //                     type="checkbox"
  //                     className="w-6 h-6 border border-gray-200 rounded-md"
  //                   />
  //                   <span className="ml-3 font-medium">Aston University</span>
  //                 </label>
  //               </li>

  //               <li>
  //                 <label className="flex items-center text-sm">
  //                   <input
  //                     type="checkbox"
  //                     className="w-6 h-6 border border-gray-200 rounded-md"
  //                   />
  //                   <span className="ml-3 font-medium">Bangor University</span>
  //                 </label>
  //               </li>

  //               <li>
  //                 <label className="flex items-center text-sm">
  //                   <input
  //                     type="checkbox"
  //                     className="w-6 h-6 border border-gray-200 rounded-md"
  //                   />
  //                   <span className="ml-3 font-medium">
  //                     Brunel University London
  //                   </span>
  //                 </label>
  //               </li>

  //               <li>
  //                 <label className="flex items-center text-sm">
  //                   <input
  //                     type="checkbox"
  //                     className="w-6 h-6 border border-gray-200 rounded-md"
  //                   />
  //                   <span className="ml-3 font-medium">Glyndwr University</span>
  //                 </label>
  //               </li>
  //             </ul>
  //           </fieldset>

  //           <button
  //             className="inline-flex items-center mt-6 text-sm font-medium text-gray-600 underline"
  //             type="button"
  //           >
  //             Show all universities
  //             <svg
  //               className="w-4 h-4 ml-0.5"
  //               fill="currentColor"
  //               viewBox="0 0 20 20"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 fillRule="evenodd"
  //                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
  //                 clipRule="evenodd"
  //               ></path>
  //             </svg>
  //           </button>
  //         </div>

  //         <div className="py-8">
  //           <fieldset>
  //             <legend className="text-xl font-medium">Commitment</legend>

  //             <ul className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
  //               <li>
  //                 <label className="flex items-center text-sm">
  //                   <input
  //                     type="checkbox"
  //                     className="w-6 h-6 border border-gray-200 rounded-md"
  //                   />
  //                   <span className="ml-3 font-medium">Full Time</span>
  //                 </label>
  //               </li>

  //               <li>
  //                 <label className="flex items-center text-sm">
  //                   <input
  //                     type="checkbox"
  //                     className="w-6 h-6 border border-gray-200 rounded-md"
  //                   />
  //                   <span className="ml-3 font-medium">Part Time</span>
  //                 </label>
  //               </li>
  //             </ul>
  //           </fieldset>
  //         </div>

  //         <div className="py-8">
  //           <fieldset>
  //             <legend className="text-xl font-medium">University Rating</legend>

  //             <ul className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
  //               <li>
  //                 <label className="flex items-center text-sm">
  //                   <input
  //                     type="checkbox"
  //                     className="w-6 h-6 border border-gray-200 rounded-md"
  //                   />
  //                   <span className="ml-3 font-medium">Rated 1+</span>
  //                 </label>
  //               </li>

  //               <li>
  //                 <label className="flex items-center text-sm">
  //                   <input
  //                     type="checkbox"
  //                     className="w-6 h-6 border border-gray-200 rounded-md"
  //                   />
  //                   <span className="ml-3 font-medium">Rated 2+</span>
  //                 </label>
  //               </li>

  //               <li>
  //                 <label className="flex items-center text-sm">
  //                   <input
  //                     type="checkbox"
  //                     className="w-6 h-6 border border-gray-200 rounded-md"
  //                   />
  //                   <span className="ml-3 font-medium">Rated 3+</span>
  //                 </label>
  //               </li>

  //               <li>
  //                 <label className="flex items-center text-sm">
  //                   <input
  //                     type="checkbox"
  //                     className="w-6 h-6 border border-gray-200 rounded-md"
  //                   />
  //                   <span className="ml-3 font-medium">Rated 4+</span>
  //                 </label>
  //               </li>
  //             </ul>
  //           </fieldset>
  //         </div>
  //       </div>
  //     </main>

  //     <footer className="flex items-center justify-between p-6">
  //       <button
  //         className="text-sm font-medium text-gray-600 underline"
  //         type="button"
  //       >
  //         Clear all
  //       </button>

  //       <button
  //         className="px-5 py-3 font-medium text-white bg-black rounded-lg"
  //         type="submit"
  //       >
  //         Show 300+ results
  //       </button>
  //     </footer>
  //   </form>;
  // };
  // let textItem = useRef(null);
  // let textItem2 = useRef(null);

  // useEffect(() => {
  //   TweenMax.from(textItem, 1, {
  //     y: -50,
  //     opacity: 1,
  //   });
  //   TweenMax.from(textItem2, 1, {
  //     y: -50,
  //     opacity: 1,
  //     delay: .1
  //   });
  // });
  return (
    // <div className="lg:mt-12">
    //   <div className="container max-w-[1080px] mx-auto">
    //     <div className="grid grid-cols-1 sm:grid-cols-2">
    //       <div className="flex flex-col justify-center p-5">
    // <div>
    //   <h1 className="text-2xl lg:text-4xl text-center sm:text-left uppercase font-extrabold text-primary md:mb-3 mt-16 md:mt-0">
    //     Find Your <span className="text-secondary">Perfect</span>
    //   </h1>
    //   <h1 className="text-2xl lg:text-4xl text-center sm:text-left text-primary uppercase font-extrabold md:mb-3">
    //     <span className="text-secondary">Job</span> Match
    //   </h1>
    // </div>
    //         <div>
    // <p className="text-sm lg:text-xl text-center sm:text-left font-thin my-3">
    //   Find jobs, hire employer & career opportunities
    // </p>
    //         </div>
    //         <div className="navber bg-white rounded-lg shadow-lg shadow-blue-50 p-2">
    //           <div className="">
    //             <div className=" flex justify-between items-center">
    // <select className="select select-primary bg-transparent  focus:outline-none h-6 border-none rounded-none text-[8px] font-light md:text-xs">
    //   <option className="text-xs md:text-sm" selected>
    //     Full-Time
    //   </option>
    //   <option className="text-xs md:text-sm">Part-Time</option>
    //   <option className="text-xs md:text-sm">Contact</option>
    //   <option className="text-xs md:text-sm">Hourly</option>
    // </select>
    // <select className="select select-primary bg-transparent  focus:outline-none h-8 border-none rounded-none text-[8px] font-light md:text-xs">
    //   <option className="text-xs md:text-sm" selected>
    //     Dhaka
    //   </option>
    //   <option className="text-xs md:text-sm">Chottogram</option>
    //   <option className="text-xs md:text-sm">Khulna</option>
    //   <option className="text-xs md:text-sm">Cumilla</option>
    // </select>

    //               <div>
    //                 <button
    //                   // onClick={handleFindJob}
    //                   className="btn-sm btn-active btn-primary text-xs md:text-sm text-white hover:text-secondary rounded-md"
    //                 >
    //                   Find job
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <p className="text-sm lg:text-xl text-center sm:text-left font-thin my-3">
    //           Popular search: frontend developer, web, backend developer &
    //           UI/UX.
    //         </p>
    //       </div>

    //       <div className="hidden sm:flex justify-center md:justify-end">
    //         <Image src={jobHiring} width={600} height={500} alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="relative bg-white">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src="https://i.ibb.co/6wmqcCr/prime-2.jpg"
        alt="Couple on a bed with a dog"
      />

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

      <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <div>
            <h1 className="text-2xl lg:text-4xl text-center sm:text-left uppercase font-extrabold text-primary md:mb-3 mt-16 md:mt-0">
              Find Your <span className="text-secondary">Perfect</span>
            </h1>
            <h1 className="text-2xl lg:text-4xl text-center sm:text-left text-primary uppercase font-extrabold md:mb-3">
              <span className="text-secondary">Job</span> Match
            </h1>
          </div>
          <p className="text-sm lg:text-xl text-center sm:text-left font-thin my-3">
            Find jobs, hire employer & career opportunities
          </p>

          <select className="select select-primary bg-transparent  focus:outline-none h-6 border-none rounded-none text-[8px] font-light md:text-xs">
            <option className="text-xs md:text-sm" selected>
              Full-Time
            </option>
            <option className="text-xs md:text-sm">Part-Time</option>
            <option className="text-xs md:text-sm">Contact</option>
            <option className="text-xs md:text-sm">Hourly</option>
          </select>
          <select className="select select-primary bg-transparent  focus:outline-none h-8 border-none rounded-none text-[8px] font-light md:text-xs">
            <option className="text-xs md:text-sm" selected>
              Dhaka
            </option>
            <option className="text-xs md:text-sm">Chottogram</option>
            <option className="text-xs md:text-sm">Khulna</option>
            <option className="text-xs md:text-sm">Cumilla</option>
          </select>
          <button
            // onClick={handleFindJob}
            className="btn-sm btn-active btn-primary text-xs md:text-sm text-white hover:text-secondary rounded-md"
          >
            Find job
          </button>

          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <a
              className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow sm:w-auto bg-primary  hover:bg-secondary focus:outline-none focus:ring "
              href="/get-started"
            >
              Get Started
            </a>

            <a
              className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-white bg-secondary sm:w-auto   focus:outline-none focus:ring hover:bg-primary"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
