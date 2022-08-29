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

function Home({ comments }) {
  return (
    <>
      <Premium />
      <Navber>
        <Banner></Banner>
        <FeaturedJob />
        <Features />
        
        <About />
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
  const res = await fetch("https://stormy-beach-33232.herokuapp.com/review");
  const comments = await res.json();

  return {
    props: {
      comments,
    },
  };
};
export default Home;
