import React, { useEffect, useState } from "react";
import axios from "axios";
import { randomQuote } from "../utils/randomQuote.js";
import { Link } from "react-router-dom";

export const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:1991/quotes")
      .then((res) => {
        setQuotes(res.data);
        setQuote(randomQuote(res.data));
      })

      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении цитаты");
      });
  }, []);
  const newQuote = () => {
    setQuote(randomQuote(quotes, quote));
  };
  return (
    <div id="wrapper">
      <div id="quote-box">
        <div id="text">{quote.text}</div>
        <div id="author">{quote.author}</div>
        <button onClick={newQuote} id="button">
          новая цитата
        </button>
        <Link to="/add-quote">
          <button id="button">добавить цитату</button>
        </Link>
      </div>
    </div>
  );
};
