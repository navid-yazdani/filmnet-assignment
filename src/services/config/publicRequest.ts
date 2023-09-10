import axios, { AxiosError, AxiosResponse } from "axios";

axios.defaults.headers["content-type"] = "application/json";
axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers["Accept-Language"] = "fa";
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL_V2;

axios.interceptors.request.use((config) => {
  return config;
});

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object) =>
    axios.post<T>(url, body).then(responseBody),
};
