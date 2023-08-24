import React from "react";
import styled from "styled-components";

const StyledButtonBox = styled.div`
  float: right;
`;

const ButtonBox = (props) => {
  return <StyledButtonBox {...props} />;
};

export default ButtonBox;
