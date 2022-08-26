import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import JobCategory from "../components/JobCategory";
import Navber from "../components/Navber";
import Reviews from "../components/Reviews";
import Card from "../components/Card";
import Subscribe from "../components/Subscribe";
import FeaturedJob from "../components/FeaturedJob";
import Service from "../components/Service";
import Asking from "../components/Asking";
import Premium from "../components/Premium";
import About from "../components/About";

export default function Home({ comments }) {
  return (
    <>
      <Premium />
      <Navber>
        <Banner></Banner>
        <FeaturedJob />
        <Features />
        <JobCategory></JobCategory>
        <About/>
        <Reviews comments={comments}></Reviews>
        <Asking />
        <Service />
        <Card />
        <Subscribe></Subscribe>

        <Footer></Footer>
      </Navber>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/review", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
    },
  });
  const comments = await res.json();

  return {
    props: {
      comments,
    },
  };
};
