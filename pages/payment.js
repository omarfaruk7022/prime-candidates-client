import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import CheckoutForm from "../components/CheckOutForm";



const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);


const payment = () => {
   
 

 
  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">
            Hello ,
          </p>
          <h2 className="card-title">Please Pay For </h2>
         
          <p>Please Pay : $140</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm  />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default payment;