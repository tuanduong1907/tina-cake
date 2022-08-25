import axios from "axios";
import { getAccessToken, validToken, removeAccessToken } from "../shared/utils/token";

axios.defaults.baseURL = "https://hai-san-genzteach.herokuapp.com/api/";


axios.interceptors.response.use(async (resp) => {
  if (resp.data.ResultStatus.Code === 14) {
    console.log(resp.data?.ResultStatus.Code, "AccessToken hết hạn");
    removeAccessToken();
    window.location.href = "/admin/login";
    return axios(resp.config);
  }
  return resp;
});

