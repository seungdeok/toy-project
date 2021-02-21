import { useState, useEffect } from 'react';
import Axios from 'axios';

export function useFetch(url){
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async() => {
    try{
      const data = await Axios.get(url);
      setPayload(data);
    } catch{
      setError("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    //componentDidMount
    callUrl()

    //componentDidUpdate
  },[]);

  return { payload, loading, error };
}