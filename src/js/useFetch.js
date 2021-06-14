import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { LOADING, ERROR } from "../actions";

const useFetch = (baseUrl, customHeaders) => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const fetchData = useCallback(
    async (url = baseUrl) => {
      try {
        const response = await axios.get(url, { headers: customHeaders });
        const data = await response.data;
        setData([...data]);
        dispatch({ type: LOADING, payload: false });
      } catch (err) {
        dispatch({ type: ERROR, payload: true });
        dispatch({ type: LOADING, payload: false });
      }
    },
    [baseUrl, dispatch, customHeaders]
  );

  const putData = async (putData) => {
    try {
      if (putData && putData !== null) {
        const response = await axios.put(baseUrl, putData, {
          headers: customHeaders,
        });
        if (response.status !== 200) {
          throw Error("Failed sending data");
        }
        dispatch({ type: ERROR, payload: false });
      }
    } catch (err) {
      dispatch({ type: ERROR, payload: true });
      dispatch({ type: LOADING, payload: false });
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const api = {
    fetchData,
    putData,
  };

  return { data, api };
};

export default useFetch;
