import React from "react";
import styled from "styled-components";

const StyledAddAuthor = styled.input`
margin-top: 10px;
margin-left: 10px;
width: 70%;
height: 25%;
type="text";
border: 2px solid ${(props) => props.color};
&:focus {
  color: ${(props) => props.color};
  border: 4px solid ${(props) => props.color};
  font-size: 20px;
}
`;

const AddAuthor = (props) => {
  return <StyledAddAuthor {...props} />;
};

export default AddAuthor;
