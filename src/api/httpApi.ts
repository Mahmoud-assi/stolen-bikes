import axios, { AxiosError, AxiosRequestHeaders } from "axios";
import { ApiError } from "./ApiError";

export const httpApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

httpApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
  } as unknown as AxiosRequestHeaders;
  return config;
});

httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
  throw new ApiError<ApiErrorData>(error.message);
});

export interface ApiErrorData {
  message: string;
}
