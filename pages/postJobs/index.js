import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../components/firebase.init";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PostJobs from "../../components/PostJobs";

const PostJob = () => {
  return (
    <div>
      <Navbar>
        <PostJobs />
        <Footer />
      </Navbar>
    </div>
  );
};

export default PostJob;
