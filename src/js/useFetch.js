import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetch = (url, customHeaders) => {

  const [data, setData] = useState([]);
  const [isFetchError, setIsFetchError] = useState("");
  const [isFetchLoading, setIsFetchLoading] = useState(true);

  const getData = useCallback(async () => {
    const response = await axios.get(url, { headers: customHeaders });
    const data = await response.data;
    if (!response.ok) {
      setIsFetchError(response.status);
    }
    setData(data);
    setIsFetchLoading(false);
  }, [url, customHeaders]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return { isFetchLoading, isFetchError, data };
};

export default useFetch;
