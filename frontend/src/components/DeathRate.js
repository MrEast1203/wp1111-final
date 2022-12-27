import React from "react";
import styled from "styled-components";

const DeathRateWrapper = styled.h2`
  text-align: right;
  margin: 0;
`;

const RateWrapper = styled.span`
  font-size: 2.5rem;
  color: red;
  font-weight: bold;
`;

const DeathRate = ({ deathRate }) => {
  return (
    <DeathRateWrapper>
      死亡率 <RateWrapper>{deathRate}</RateWrapper> %
    </DeathRateWrapper>
  );
};

export default DeathRate;
