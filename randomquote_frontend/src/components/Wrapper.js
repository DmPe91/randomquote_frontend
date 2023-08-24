import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  min-height: 100vh;
  transition: 3s ease;
`;

const Wrapper = (props) => {
  return <StyledWrapper {...props} />;
};

export default Wrapper;
