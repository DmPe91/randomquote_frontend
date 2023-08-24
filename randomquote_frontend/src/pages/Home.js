import React, { useEffect, useState } from "react";
import axios from "axios";
import { randomQuote } from "../utils/randomQuote.js";
import { arrColor } from "../utils/arrColor.js";
import { Link } from "react-router-dom";
import { useSpring, animated, useTransition } from "react-spring";
import Wrapper from "../components/Wrapper.js";
import QuoteBox from "../components/QuoteBox.js";
import Text from "../components/Text.js";
import Author from "../components/Author.js";
import ButtonBox from "../components/ButtonBox.js";
import Button from "../components/Button.js";

export const Home = () => {
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
  const animation = useSpring({
    transform: "translateY(0%)",
    from: { transform: "translateY(100%)" },

    config: { duration: 1000 },
  });
  const quote_animation = useTransition(quote, {
    from: {
      opacity: 0,
    },
    enter: { opacity: 1, transition: "1s" },

    leave: {
      opacity: 0,
    },
    trail: 500,
  });

  const newQuote = () => {
    setQuote(randomQuote(quotes, quote));
    setColor(randomQuote(arrColor));
  };

  return (
    <Wrapper background={color}>
      <QuoteBox as={animated.div} style={animation}>
        <Text color={color}>
          {quote_animation(
            (props, item) =>
              item && <animated.div style={props}>{item.text} </animated.div>
          )}
        </Text>
        <Author color={color}>
          {quote_animation(
            (props, item) =>
              item && <animated.div style={props}>{item.author} </animated.div>
          )}
        </Author>

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
