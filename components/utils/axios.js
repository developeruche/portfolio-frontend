import axios from "axios";
import url from "./urls"

const instance = axios.create({
  baseURL: url.BASE_URL,
});

export default instance;
