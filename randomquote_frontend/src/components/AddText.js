import React from "react";
import styled from "styled-components";

const StyledAddText = styled.textarea`
margin-top: 30px;
margin-left: 10px;
width: 70%;
height: 60px;
rows="10";
cols="45";
border: 2px solid ${(props) => props.color};
border-radius: 10px;
&::placeholder {
  font-size: 40px;
}
&:focus {
  color: ${(props) => props.color};
  
  font-size: 20px;

`;

const AddText = (props) => {
  return <StyledAddText {...props} />;
};

export default AddText;
