import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || `https://walk-visualization-backend.fly.dev/
`, 
  withCredentials: true
})

async function makeRequest<T>(url: string, options?: object): Promise<T> {
  const result = await api(url, options)
  return result.data;
}

export default makeRequest