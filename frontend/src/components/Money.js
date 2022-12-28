import React from "react";
import styled from "styled-components";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const MoneyWrapper = styled.h2`
  width: 6.4rem;
  font-size: 2rem;
  margin: 0;
  color: orange;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Money = ({ money }) => {
  return (
    <MoneyWrapper>
      <RiMoneyDollarCircleFill />{money}
    </MoneyWrapper>
  );
};

export default Money;
