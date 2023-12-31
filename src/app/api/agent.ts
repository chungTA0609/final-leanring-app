import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { URLSearchParams } from "url";
import store from "../store";

// const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));

axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_URL;
// axios.defaults.baseURL = "https://restcountries.com/v3.1/";
axios.defaults.withCredentials = false;
const responseBody = (response: AxiosResponse) => response.data;
//
axios.interceptors.request.use((config) => {
  const token = store.getState().account.user?.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateErrors.push(data.errors[key]);
            }
          }
          throw modelStateErrors.flat();
        }
        toast.error(data.title);
        break;
      case 401:
        toast.error(data.title);
        break;
      case 404:
        toast.error("Some things not correct");
        break;
      case 403:
        toast.error("You are not allowed to do that!");
        break;
      case 500:
        // router.navigate("/server-error", { state: { error: data } });
        break;
      default:
        break;
    }

    return Promise.reject(error.response);
  }
);

const request = {
  get: (url: string, params?: URLSearchParams) =>
    axios.get(url, { params }).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};
const Account = {
  login: (values: object) => request.post("authentication/log-in", values),
  register: (values: object) => request.post("authentication/register", values),
};

const agent = {
  request,
  Account,
};
export default agent;
