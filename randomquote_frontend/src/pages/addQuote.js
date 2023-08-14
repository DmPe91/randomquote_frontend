import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const AddQuote = () => {
  const [text, setText] = React.useState("");
  const [author, setAuthor] = React.useState("");
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
    <div id="wrapper">
      <div id="quote-box">
        <input type="text" onChange={(e) => setAuthor(e.target.value)}></input>
        <input type="text" onChange={(e) => setText(e.target.value)}></input>
        <button onClick={onSubmit} id="button">
          Добавить
        </button>
        <Link to="/">
          <button id="button">Назад</button>
        </Link>
      </div>
    </div>
  );
};
