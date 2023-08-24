import React from "react";
import styled from "styled-components";

const StyledAuthor = styled.div`
  font-size: 1em;
  text-align: right;
  height: 50px;
  float: right;
  color: ${(props) => props.color};
  transition: 1s ease;
  margin-right: 30px;
`;

const Author = (props) => {
  return <StyledAuthor {...props} />;
};

export default Author;
