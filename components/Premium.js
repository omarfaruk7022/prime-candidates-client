import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";


const Premium = () => {
  const [data, setData] = useState([]);
const router = useRouter()
 const handlePayment = (e) => {
    e.preventDefault();
    router.push(`/premium`)
 }


  useEffect(() => {
    fetch("https://stormy-beach-33232.herokuapp.com/premiums")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // const name = data.map((item) => item.name);
        // console.log(name);
        setData(data);
      });
  }, []);

  return (
    <div>
      <section className="py-6 ">
        <div className="container mx-auto p-4 sm:p-10">
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
            <button
            onClick={handlePayment}
            >Pay for premiums</button>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Premium;
