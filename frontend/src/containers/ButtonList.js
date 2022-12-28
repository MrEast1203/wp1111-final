import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const ButtonListWrapper = styled.ul`
  width: 100%;
  margin: 0 auto;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  li {
    width: 44%;
    margin: 1.3rem 3%;
  }
`;

const ButtonList = ({ items }) => {
  const Buttons = items.map((ele) => {
    return (
      <li key={ele.name}>
        <Button content={ele.name} operation={ele.operation} />
      </li>
    );
  });

  return <ButtonListWrapper>{Buttons}</ButtonListWrapper>;
};

export default ButtonList;
