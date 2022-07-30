import React from "react";
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
