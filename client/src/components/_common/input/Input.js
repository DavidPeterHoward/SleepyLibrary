import React from "react";
import styled, { css } from "styled-components/macro";

export const Default_Input = styled.input`
  padding: 1em 1em;
  margin: 0.5em;
  margin-top: 2em;
  background: #0d0c1d;
  border: 2px solid #0d0c1d;
  background: #fff;
  color: #0d0c1d;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #0d0c1d;
    color: #fff;
  }
`;

const Input = props => {
  return <Default_Input {...props} />;
};

export default Input;
