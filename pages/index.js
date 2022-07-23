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



export default function Home({ comments }) {
  return (
    <>
      <Navber>
        <Banner></Banner>
        <Features />
        <JobCategory></JobCategory>
        <Reviews comments={comments}></Reviews>
        <About></About>
        <Footer></Footer>
      </Navber>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  const comments = await res.json();

  return {
    props: {
      comments
    }
  }
}