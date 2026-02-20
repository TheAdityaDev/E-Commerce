import axios from "axios";

export async function axiosInstance() {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.defaults.withCredentials = true;
}