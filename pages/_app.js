import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/globals.css";
import AOS from "aos";

import "aos/dist/aos.css";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
