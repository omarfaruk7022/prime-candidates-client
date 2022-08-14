import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import Footer from "../components/Footer";
import Navber from "../components/Navber";
import SupportsData from "../components/SupportsData";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../components/firebase.init";

const support = () => {
  const router = useRouter()
  const [user] = useAuthState(auth) 
    
  useEffect(() => {
    

    // if there is no authenticated user, redirect to login page_

    if (!user) {
      router.push("/login")
    }
  }, [user]);
 
  // const [reasons, setReasons] = useState([]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const text = e.target.bio.value;
  //   const reason = {
  //     text,
  //   };

  //   fetch("https://stormy-beach-33232.herokuapp.com/support", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(reason),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.acknowledged) {
  //         swal("Yayy", "Job added successfully!", "success");
  //       }
  //     });

  //   e.target.reset();
  // };

  // useEffect(() => {
  //   fetch("https://stormy-beach-33232.herokuapp.com/support")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setReasons(data);
  //     });
  // }, []);

  return (
    <div>
      <Navber>
        <div className="m-auto">
          <h1 className=" text-5xl text-secondary">
            Please join our support session
          </h1>

          <Link
            href="https://pcc.pages.dev/2af4c1c5-976c-479c-b555-0e0a64b031b3"
            target="_blank"
          >
            <button className="btn ml-[260px] btn-outline w-20 btn-secondary">
              Join
            </button>
          </Link>
        </div>

        {/* <label htmlFor="my-modal" className="btn modal-button">
        open modal
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <div className="col-span-full">
            <label htmlFor="bio" className="text-md">
              Type your Problem
            </label>
            <form onSubmit={handleSubmit}>
              <textarea
                name="bio"
                id="bio"
                placeholder=""
                className="w-full h-[200px] rounded-md bg-gray-200 "
                spellCheck="false"
              ></textarea>
              <button type="submit" value="Submit">
                Submit
              </button>
            </form>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
     <div className="grid grid-cols-3 gap-5">
   {
      reasons.map(reason => {
        return <SupportsData reason={reason}></SupportsData>
        
        
      })
    }
     </div> */}
      </Navber>
      <Footer />
    </div>
  );
};

export default support;
