import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || `http://localhost:3000`,
  withCredentials: true
})

async function makeRequest<T>(url: string, options?: object): Promise<T> {
  const result = await api(url, options)
  return result.data;
}

export default makeRequest