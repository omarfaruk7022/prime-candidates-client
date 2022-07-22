import Banner from "../components/Banner";
import Features from "../components/Features";
import JobCategory from "../components/JobCategory";
import Navber from "../components/Navber";
import Reviews from "../components/Reviews";

export default function Home({ comments }) {
  return (
    <>
      <Navber>
        <Banner></Banner>
      </Navber>
      <Features />
      <JobCategory></JobCategory>
      <Reviews comments={comments}></Reviews>
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
