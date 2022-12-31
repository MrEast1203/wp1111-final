import React from "react";
import styled from "styled-components";
import { AiFillCloud } from "react-icons/ai";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

const PeriodWrapper = styled.ul`
  width: 55%;
  font-size: 1.8rem;
  font-weight: bold;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;

  & .time-period {
    display: flex;
    align-items: center;
  }
`;

const Period = ({ timePeriod, days }) => {
  return (
    <PeriodWrapper>
      <li>第 {days} 天</li>
      <li className="time-period">
        {timePeriod === "早上" ? (
          <AiFillCloud />
        ) : timePeriod === "下午" ? (
          <BsFillSunFill />
        ) : (
          <BsMoonStarsFill />
        )}
        {timePeriod}
      </li>
    </PeriodWrapper>
  );
};

export default Period;
