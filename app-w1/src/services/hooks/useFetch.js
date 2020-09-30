import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchAnime = () => {

  const [ title, setTitle ] = useState("");
  const [ animes, setAnimes ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    setLoading(true);
    console.log("asd");
    axios({
      method: "GET",
      url: `https://api.jikan.moe/v3/search/anime?q=${title}&page=1`
    })
      .then(({ data }) => {
        setAnimes(data.results);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [title]);

  return { title, animes, loading, error, setTitle };

}

export const useFetchRecommendations = () => {

  const [ recommended, setRecommended ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    setLoading(true);
    const page = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    fetch(`https://api.jikan.moe/v3/top/anime/${page}/upcoming`)
      .then((res) => res.json())
      .then((data) => {
        setRecommended(data.top);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { recommended, loading, error };

}

export const useFetchById = (apiUrl) => {

  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null); 

  useEffect(() => {
    setLoading(true);
    fetch(apiUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiUrl]);

  return { data, loading, error };
}