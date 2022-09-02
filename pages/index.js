import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import Card from "../components/Card";
import Subscribe from "../components/Subscribe";
import FeaturedJob from "../components/FeaturedJob";
import Service from "../components/Service";
import Asking from "../components/Asking";
import Premium from "../components/Premium";
import About from "../components/About";
import Animation from "../components/ResumeHome";
import Learn from "../components/Learn";
import CompanyWithUs from "../components/CompanyWithUs";
import App from "../components/Quiz/App";

function Home({ comments }) {

  return (
    <>
    
      <Premium />
      <Navbar>
        <Banner></Banner>
        <FeaturedJob />
        <Features />
        <Learn />
        <Animation />
        <About />
        <CompanyWithUs />
        <Reviews comments={comments}></Reviews>
        <Asking />
        <Service />
        <Card />
        <Subscribe></Subscribe>
        <App />
        <Footer></Footer>
      </Navbar>
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
