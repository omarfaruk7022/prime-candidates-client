import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Navber from "../components/Navber";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navber>
        <Banner></Banner>
      </Navber>
      <Features/>
    </>
  );
}
