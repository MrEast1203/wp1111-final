import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  font-size: 1.6rem;
  color: #fff;
  background: #000;
  text-align: center;
  text-decoration: none;
  padding: 1rem 0;
  transition: 0.4s;
  display: block;
  position: relative;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    background: transparent;
    color: #000;
  }

  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    transition: top 0.4s, left 0.4s;
    z-index: -1;
  }

  &::before {
    border-left: 2px solid #000;
    border-top: 2px solid #000;
  }

  &::after {
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
  }

  &:hover::before {
    top: -5px;
    left: -15px;
  }

  &:hover::after {
    top: 5px;
    left: 15px;
  }
`;

const Button = ({ content, operation }) => {
  return (
    <StyledButton type="button" onClick={operation}>
      {content}
    </StyledButton>
  );
};

export default Button;
