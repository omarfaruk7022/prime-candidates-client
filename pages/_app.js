import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/globals.css";
import Router from "next/router";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(false);
  // Router.events.on("routeChangeStart", (url) => {
  //   console.log(`Loading: ${url}`);
  //   setLoading(true);
  // });
  // Router.events.on("routeChangeComplete", (url) => {
  //   console.log(`Loaded: ${url}`);
  //   setLoading(false);
  // });
  return (
    <>
      {/* {loading && <Loader />} */}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
