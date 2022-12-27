import React from "react";
import styled from "styled-components";

const PeriodWrapper = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
`;

const Period = ({ timePeriod, days }) => {
  return (
    <PeriodWrapper>
      第 {days} 天  <i class="fa-solid fa-cloud"></i> {timePeriod}
    </PeriodWrapper>
  );
};

export default Period;
