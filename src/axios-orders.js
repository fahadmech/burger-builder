import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-buger-builder-a03d6.firebaseio.com/"
});

export default instance;