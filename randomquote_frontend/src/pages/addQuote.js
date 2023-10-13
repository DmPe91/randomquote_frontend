import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { randomQuote } from "../utils/randomQuote.js";
import { arrColor } from "../utils/arrColor.js";
import Wrapper from "../components/Wrapper.js";
import QuoteBox from "../components/QuoteBox.js";
import AddText from "../components/AddText.js";
import AddAuthor from "../components/AddAuthor.js";
import ButtonBox from "../components/ButtonBox.js";
import Button from "../components/Button.js";

export const AddQuote = () => {
  const [text, setText] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [color, setColor] = useState(randomQuote(arrColor));
  const navigate = useNavigate();
  const onSubmit = async () => {
    try {
      const quote = {
        text,
        author,
      };
      await axios.post("http://localhost:1991/posts", quote);
      navigate("/");
    } catch (error) {
      console.warn(error);
      alert("Ошибка при загрузке цитаты");
    }
  };

  return (
    <Wrapper background={color}>
      <QuoteBox>
        <AddText
          color={color}
          onChange={(e) => setText(e.target.value)}
          placeholder="Текст"
        ></AddText>
        <AddAuthor
          color={color}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Автор"
        ></AddAuthor>
        <ButtonBox>
          <Button color={color} onClick={onSubmit}>
            Добавить
          </Button>
          <Link to="/">
            <Button color={color}>Назад</Button>
          </Link>
        </ButtonBox>
      </QuoteBox>
    </Wrapper>
  );
};
