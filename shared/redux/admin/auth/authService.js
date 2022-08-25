import axios from "axios";

const url = "/auth/SendSignInAccountRequest";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

// Login
const login = async (userData) => {
  const response = await axios.post(url, userData, config);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  login,
};

export default authService;
