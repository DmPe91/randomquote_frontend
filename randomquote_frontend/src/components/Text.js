import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-weight: 500;
  font-size: 1.75em;
  text-align: center;
  padding-top: 30px;
  height: 100px;
  color: ${(props) => props.color};
  transition: 1s ease;
`;

const Text = (props) => {
  return <StyledText {...props}></StyledText>;
};

export default Text;
