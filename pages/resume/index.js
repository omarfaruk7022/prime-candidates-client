import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ResumeBuilder from "../../components/ResumeBuilder";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../components/firebase.init";
import Router from "next/router";
import Loader from "../../components/Loader";

const Resume = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user) {
      Router.push("/login");
    }
    setLoading(false);
  }, [user]);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="pt-2 md:pt-4">
      <Navbar>
        <ResumeBuilder></ResumeBuilder>
        <Footer></Footer>
      </Navbar>
    </div>
  );
};

export default Resume;
