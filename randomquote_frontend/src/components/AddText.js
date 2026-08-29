import React from "react";
import styled from "styled-components";

const StyledAddText = styled.textarea`
  margin-top: 30px;
  margin-left: 10px;
  width: 70%;
  font-size: 18px;
  border: 2px solid ${(props) => props.color};
  border-radius: 10px;
  padding: 25px;
  &::placeholder {
    font-size: 18px;
  }
  &:focus {
    color: ${(props) => props.color};

    font-size: 20px;
  }
`;

const AddText = (props) => {
  return <StyledAddText {...props} />;
};

export default AddText;
