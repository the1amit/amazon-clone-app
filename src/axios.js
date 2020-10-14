import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-f328c.cloudfunctions.net/api",
  //localhost baseURL: "http://localhost:5001/clone-f328c/us-central1/api",
});

export default instance;
