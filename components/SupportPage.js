import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../components/firebase.init";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Link from "next/link";

const SupportPage = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  useEffect(() => {
    // if there is no authenticated user, redirect to login page_

    if (!user) {
      router.push("/login");
    }
  }, [router, user]);

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
      <Navbar>
        <section>
          <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
              <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
                <img
                  class="absolute inset-0 object-cover w-full h-full"
                  src="https://i.ibb.co/ZTCs5Nd/Screenshot-2022-09-02-170805.png"
                  alt="Man using a computer"
                />
              </div>

              <div class="lg:py-24">
                <h2 class="text-3xl font-bold sm:text-4xl">
                  Our Session in 24/7
                </h2>

                <p class="mt-4 text-gray-600">
                  Please join our support session
                </p>
            <Link
              href="https://pcc.pages.dev/2af4c1c5-976c-479c-b555-0e0a64b031b3"
              target="_blank"
            >
              <button className="btn my-4 text-white btn-outline bg-primary hover:bg-secondary border-0">
                Join
              </button>
            </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <label htmlFor="my-modal"  className="btn modal-button">
        open modal
      </label>

      <input type="checkbox" id="my-modal"  className="modal-toggle" />
      <div  className="modal">
        <div  className="modal-box">
          <h3  className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <div  className="col-span-full">
            <label htmlFor="bio"  className="text-md">
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
          <div  className="modal-action">
            <label htmlFor="my-modal"  className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
     <div  className="grid grid-cols-3 gap-5">
   {
      reasons.map(reason => {
        return <SupportsData reason={reason}></SupportsData>
        
        
      })
    }
     </div> */}
      </Navbar>
      <Footer />
    </div>
  );
};

export default SupportPage;
