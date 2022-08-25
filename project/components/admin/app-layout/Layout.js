import Navbar from "./Navbar";
import { validToken, getAccessToken } from "../../../../shared/utils/token";
import axios from "axios";
import { useEffect } from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      validToken() && getAccessToken()
    }`;
  }, []);
  return (
    <>
      {children}
      <Navbar />
    </>
  );
};

export default Layout;
