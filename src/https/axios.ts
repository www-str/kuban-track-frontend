import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://meowmur.ru/api',
    timeout: 1000,
    headers: {
        "Content-Type": 'application/json',
    }
});

export default axiosInstance