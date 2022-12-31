import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  font-size: 1.6rem;
  color: #fff;
  background: #feb75d;
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
    color: #feb75d;
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
  }

  &::before {
    border-left: 2px solid #feb75d;
    border-top: 2px solid #feb75d;
  }

  &::after {
    border-right: 2px solid #feb75d;
    border-bottom: 2px solid #feb75d;
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
