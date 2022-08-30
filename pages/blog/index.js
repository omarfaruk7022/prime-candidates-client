import React from "react";
import Navbar from "../../components/Navbar";
import Blog from "../../components/Blog";
import Footer from "../../components/Footer";

const BlogPage = () => {
  return (
    <div>
      <Navbar>
        <Blog></Blog>
        <Footer></Footer>
      </Navbar>
    </div>
  );
};

export default BlogPage;
