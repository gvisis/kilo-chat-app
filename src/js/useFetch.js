import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetch = (url, customHeaders) => {
  const [data, setData] = useState([]);
  const [isFetchError, setIsFetchError] = useState("");
  const [isFetchLoading, setIsFetchLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const response = await axios.get(url, { headers: customHeaders });
      const data = await response.data;
      setData(data);
      setIsFetchLoading(false);
    } catch (err) {
      setIsFetchError(err);
      setIsFetchLoading(false);
    }
  }, [url, customHeaders]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return { isFetchLoading, isFetchError, data };
};

export default useFetch;
