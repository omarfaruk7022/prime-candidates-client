import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";

import Navbar from "../../components/Navbar";

const CourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [courseDetails, setCourseDetails] = useState({});
  useEffect(() => {
    if (router.isReady) {
      fetch(`https://stormy-beach-33232.herokuapp.com/courseDetails/${id}`)
        .then((res) => res.json())
        .then((data) => setCourseDetails(data));
    }
  }, [id, router.isReady]);
  return (
    <Navbar>
      <div className="container max-w-[1080px] mx-auto">
        <h1 className="text-center my-5">Effective Listening</h1>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex justify-center">
            <iframe
              width="400"
              height="200"
              src="https://www.youtube.com/embed/IwWj_SfDpzg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-center">
            <iframe
              width="400"
              height="200"
              src="https://www.youtube.com/embed/IwWj_SfDpzg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-center">
            <iframe
              width="400"
              height="200"
              src="https://www.youtube.com/embed/IwWj_SfDpzg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-center">
            <iframe
              width="400"
              height="200"
              src="https://www.youtube.com/embed/IwWj_SfDpzg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-center">
            <iframe
              width="400"
              height="200"
              src="https://www.youtube.com/embed/IwWj_SfDpzg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-center">
            <iframe
              width="400"
              height="200"
              src="https://www.youtube.com/embed/IwWj_SfDpzg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="text-center my-5">
          <Link href="/quizTest">
            <button  className="btn text-white btn-outline bg-primary hover:bg-secondary border-0">Exam Test</button>
          </Link>
        </div>
      </div>

      <Footer></Footer>
    </Navbar>
  );
};

export default CourseDetails;
