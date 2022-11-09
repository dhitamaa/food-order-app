import axios from "axios";

const api = axios.create({
  baseURL: "https://kawahedukasibackend.herokuapp.com",
  timeout: 5000
})

export const imageServer = axios.create({
  baseURL: "http://kelompoktimtam.epizy.com",
  timeout: 5000
})

export default api