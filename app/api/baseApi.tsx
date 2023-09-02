import axios from "axios";

const BaseApi = axios.create({
  baseURL: process.env.BASE_API,
});
export default BaseApi;
