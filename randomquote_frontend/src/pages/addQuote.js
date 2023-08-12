import React, { useEffect, useState } from "react";
import axios from "axios";

export const AddQuote = () => {
  const [text, setText] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const onSubmit = async () => {
    try {
      const quote = {
        text,
        author,
      };
      await axios.post("http://localhost:1991/posts", quote);
    } catch (error) {
      console.warn(error);
      alert("Ошибка при загрузке цитаты");
    }
  };
  return (
    <>
      <input type="text" onChange={(e) => setAuthor(e.target.value)}></input>
      <input type="text" onChange={(e) => setText(e.target.value)}></input>
      <button onClick={onSubmit}></button>
    </>
  );
};
