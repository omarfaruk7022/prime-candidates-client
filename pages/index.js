import Banner from "../components/Banner";
import Features from "../components/Features";
import JobCategory from "../components/JobCategory";
import Navber from "../components/Navber";

export default function Home() {
  return (
    <>
      <Navber>
        <Banner></Banner>
      </Navber>
      <Features/>
      <JobCategory></JobCategory>
    </>
  );
}
