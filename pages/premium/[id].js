// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "../../components/CheckOutForm";

// const stripePromise = loadStripe(
//   "pk_test_51L1SvcGr37yKmNuBKIXsEprm7og2VDAKvFyenurcd6C62OChOdJfBAqanGDlZpUxbVl3322Mph0h4y4AWSrjz6Bh00z3C2Ts9H"
// );

const PremiumId = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [premiumDetails, setPremiumDetails] = useState([]);
//   useEffect(() => {
//     fetch(`http://localhost:5000/premiums`)
//       .then((res) => res.json())
//       .then((data) =>{
//         const pre = data.filter(item => item._id === id);
//         setPremiumDetails(pre)
//       });
//   }, [id]);
//   console.log(id);
//   console.log(premiumDetails);

  return (
    <div>
      {/* <div>
        <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
          <div className="card-body">
            <p className="text-success font-bold">Hello ,</p>
            <h2 className="card-title">Please Pay For </h2>

            <p>Please Pay : {premiumDetails?.value}</p>
          </div>
        </div>
        <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm premium={premiumDetails} />
            </Elements>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PremiumId;
