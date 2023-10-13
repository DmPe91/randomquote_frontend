import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-evenly;
  background: ${(props) => props.background};
  height: 100vh;
  transition: 3s ease;
`;

const Wrapper = (props) => {
  return <StyledWrapper {...props} />;
};

export default Wrapper;
