import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: white;
  background: ${(props) => props.color};
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin-right: 5px;
  margin-bottom: 15px;
  transition: 3s ease;
  float: right;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.color};
    background: white;
    border: 1px solid ${(props) => props.color};
    transition: 1s ease;
  }
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
