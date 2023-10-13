import React from "react";
import styled from "styled-components";

const StyledAddAuthor = styled.input`
margin-top: 20px;
margin-left: 10px;
width: 70%;
height: 30px;
type="text";
border-radius: 10px;
border: 2px solid ${(props) => props.color};
&:focus {
  color: ${(props) => props.color};
  
  font-size: 20px;
}
`;

const AddAuthor = (props) => {
  return <StyledAddAuthor {...props} />;
};

export default AddAuthor;
