import React from "react";
import styled from "styled-components";

const StyledQuoteBox = styled.div`
  background-color: white;
  width: 50%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
`;

const QuoteBox = (props) => {
  return <StyledQuoteBox {...props} />;
};

export default QuoteBox;
