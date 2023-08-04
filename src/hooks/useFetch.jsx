import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(url) {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        if (error.response) {
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    }
    fetchData(url);
  }, [url]);

  return { data };
}
