import React, { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [quote, setQuote] = useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:1991/quotes")
      .then((res) => {
        setQuote(res.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении цитаты");
      });
  }, []);
  return <div>quote{console.log(quote)}</div>;
};
