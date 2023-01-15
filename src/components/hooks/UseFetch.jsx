import  { React, useState, useEffect, useCallback } from "react";


export const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) throw Error("Error al consumir la API");
      const data = await res.json();   
      setData(data.results);

    } catch (error) {
      console.log(error);
      setError(error.message);
      setData([]); 
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};
