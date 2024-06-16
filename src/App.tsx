import { useEffect } from "react";
import "./App.css";
import React from "react";
import { fetcher } from "./components/fetcher/fetcher";
import { useState } from "react";
import Card from "./components/Card/Card";

const apiKey = process.env.REACT_APP_API_KEY;
const url = "https://api.kinopoisk.dev/v1.4/movie/448";
const options = {
  method: "GET",
  headers: { accept: "application/json", "X-API-KEY": apiKey },
};

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const getData = () => {
      const response = fetcher(url, options);
      setIsLoading(true);
      response.then((response) => {
        setIsLoading(false);
        setData(response);
      });
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(data);
  return <div className="App">{!isLoading && <Card data={data} />}</div>;
}

export default App;
