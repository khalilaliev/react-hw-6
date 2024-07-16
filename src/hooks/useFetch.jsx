import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTodosData = async () => {
      setIsLoader(true);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Todos not found!");
        const data = await res.json();
        const slicedData = data.slice(0, 30);
        setData(slicedData);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoader(false);
      }
    };
    getTodosData();
  }, [url]);

  return { data, isLoader, error };
};

export default useFetch;
