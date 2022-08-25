import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../components/firebase.init";
import Footer from "../../components/Footer";
import Navber from "../../components/Navber";
import PostJobs from "../../components/PostJobs";

const PostJob = () => {
 


  return (
    <div>
      <Navber>
        <PostJobs />
        <Footer />
      </Navber>
    </div>
  );
};

export default PostJob;
