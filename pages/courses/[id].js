import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Navber from "../../components/Navber";

const CourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [courseDetails, setCourseDetails] = useState({});
  useEffect(() => {
    if (router.isReady) {
      fetch(`http://localhost:5000/courseDetails/${id}`)
        .then((res) => res.json())
        .then((data) => setCourseDetails(data));
    }
  }, [id, router.isReady]);
  return (
    <Navber>
      <div>
        <h1>{courseDetails.courseTitle}</h1>
        <Link href="/quizes">
          <button className="btn btn-primary">Exam Test</button>
        </Link>
      </div>
    </Navber>
  );
};

export default CourseDetails;
