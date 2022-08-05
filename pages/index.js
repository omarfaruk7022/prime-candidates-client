import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import JobCategory from "../components/JobCategory";
import Navber from "../components/Navber";

import styles from "../styles/Home.module.css";

import Reviews from "../components/Reviews";
import About from "../components/About";

import Card from "../components/Card";
import Subscribe from "../components/Subscribe";
import FeaturedJob from "../components/FeaturedJob";

import Courses from "../components/Courses";

import Service from "../components/Service";
import Quiz from "../components/Quiz";


export default function Home({ comments }) {
  return (
    <>
      <Navber>
        <Banner></Banner>
        <FeaturedJob />
        <Features />
        <JobCategory></JobCategory>
        <Reviews comments={comments}></Reviews>
        <Service />
        <Card />
        {/* <Courses /> */}
        <Subscribe></Subscribe>
        <Quiz />
        <Footer></Footer>
      </Navber>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await res.json();

  return {
    props: {
      comments,
    },
  };
};
