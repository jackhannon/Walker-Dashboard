import { useState } from 'react'
import makeRequest from '../utils/makeRequests';

const useAxios = async () => {
  const [data, setData] = useState([]);
  try {
    const data = await makeRequest("/agents")
    setData(data)
  } catch (error) {
    console.log(error)
  }
  return [data]
}

export default useAxios