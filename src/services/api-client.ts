import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number
  data: T[]
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  params: {
    key: import.meta.env.VITE_API_KEY
  }
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(this.endpoint, config);

    return res.data;
  }

  get = async (id: number | string) => {
    const res = await axiosInstance.get<T>(this.endpoint + '/' + id)

    return res.data
  }
}

export default APIClient