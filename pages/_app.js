import { ThemeProvider } from "styled-components";
import { theme } from "../shared/utils/constants";
// swiper
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";
// end swiper
import "../styles/index.scss";

import runCheckKeyBoard from "../helpers/onKeyBoardOnOff";
import { useEffect } from "react";

import "../interceptors/axios";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    runCheckKeyBoard();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <>
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
