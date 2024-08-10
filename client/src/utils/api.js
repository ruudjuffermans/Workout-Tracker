import axios from "axios";


const BASE_URL = process.env.REACT_APP_API_URL;
export const API = axios.create({
    baseURL: BASE_URL,
  });