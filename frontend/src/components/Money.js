import React from "react";
import styled from "styled-components";

const MoneyWrapper = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: orange;
`;

const Money = ({ money }) => {
  return (
    <MoneyWrapper>
      <i className="fa-solid fa-sack-dollar"></i> {money}
    </MoneyWrapper>
  );
};

export default Money;
