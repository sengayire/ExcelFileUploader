import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

export default (args: AxiosRequestConfig): AxiosInstance => {
  const { baseURL, headers, ...rest }: { token?: string; baseURL?: string; headers?: Record<string, Headers> } = args;

  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...rest,
  });
};
