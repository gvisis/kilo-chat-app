import { useState, useEffect,useCallback } from "react";
import axios from "axios";

const useFetch = (baseUrl, customHeaders) => {
  const [data, setData] = useState([]);
  const [isFetchError, setIsFetchError] = useState(false);
  const [isFetchLoading, setIsFetchLoading] = useState(true);

  const fetchData = useCallback(async (url = baseUrl) => {
    try {
      const response = await axios.get(url, { headers: customHeaders });
      const data = await response.data;
      setData([...data]);
      setIsFetchLoading(false);
    } catch (err) {
      setIsFetchError(true);
      setIsFetchLoading(false);
    }
  },[baseUrl,customHeaders]);

  const putData = async (putData) => {
    try {
      if (putData && putData !== null) {
        const response = await axios.put(baseUrl, putData, {
          headers: customHeaders,
        });
        if (response.status !== 200) {
          throw Error("Failed sending data");
        }
        setIsFetchError(false);
      }
    } catch (err) {
      setIsFetchError(true);
      setIsFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const api = {
    fetchData,
    putData,
  };

  return { isFetchLoading, isFetchError, data, api };
};

export default useFetch;
