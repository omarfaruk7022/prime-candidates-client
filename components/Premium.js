import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Premium = () => {
  // const [data, setData] = useState([]);
  // const router = useRouter();
  const handleCross = (e) => {
    e.preventDefault();

    document.getElementById("cross").style.display = "none";
  };

  // useEffect(() => {
  //   fetch("https://stormy-beach-33232.herokuapp.com/premiums")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       // const name = data.map((item) => item.name);
  //       // console.log(name);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div>
      <section id="cross" className=" sticky ">
        <div className="relative px-4 py-3 text-white bg-secondary pr-14">
          <p className="text-sm font-medium text-left sm:text-center">
            Try your premium tour! free for 1 month---!
            <Link href="/premium"><span className="underline cursor-pointer">  Learn More &rarr; </span></Link>
          </p>

          <button
            onClick={handleCross}
            aria-label="Close"
            className="absolute p-1 transition -translate-y-1/2 rounded-lg top-1/2 right-4 bg-black/10 hover:bg-black/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {/* <div className="container mx-auto p-4 sm:p-10">
          <div className="mb-16 space-y-4 text-center">
            <h1 className="text-4xl font-semibold leading-tight text-secondary">
              Pricing
            </h1>
            <h1 className="px-4 sm:px-8 lg:px-24">
              Sunt suscipit eaque qui iure unde labore numquam iusto alias
              explicabo, pariatur ipsam, cupiditate aliquid modi?
            </h1>
          </div>
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
            <button onClick={handlePayment}>Pay for premiums</button>
            
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Premium;
