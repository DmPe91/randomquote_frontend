import React, { useEffect, useState } from "react";
import axios from "axios";
import { randomQuote } from "../utils/randomQuote.js";
import { arrColor } from "../utils/arrColor.js";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import Wrapper from "../components/Wrapper.js";
import QuoteBox from "../components/QuoteBox.js";
import Text from "../components/Text.js";
import Author from "../components/Author.js";
import ButtonBox from "../components/ButtonBox.js";
import Button from "../components/Button.js";

export const Home = () => {
  const [time_animation, setTime_animation] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({});
  const [color, setColor] = useState(randomQuote(arrColor));

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

  useEffect(() => {
    setTime_animation(true);
  }, [quote]);
  function newQuote() {
    setTime_animation(false);
    setQuote(randomQuote(quotes, quote));
    setColor(randomQuote(arrColor));
  }

  return (
    <Wrapper background={color}>
      <QuoteBox>
        {time_animation ? (
          <Zoom triggerOnce={true}>
            <Text color={color}>{quote.text}</Text>
            <Author color={color}>{quote.author}</Author>
          </Zoom>
        ) : (
          <div>
            <Text color={color}>{quote.text}</Text>
            <Author color={color}>{quote.author}</Author>
          </div>
        )}
        <ButtonBox>
          <Button color={color} onClick={newQuote}>
            новая цитата
          </Button>
          <Link to="/add-quote">
            <Button color={color}>добавить цитату</Button>
          </Link>
        </ButtonBox>
      </QuoteBox>
    </Wrapper>
  );
};
