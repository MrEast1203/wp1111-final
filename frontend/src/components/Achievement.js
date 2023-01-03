import React from "react";
import styled from "styled-components";
import achieveFunc from "../functions/achieve"
const AchievementWrapper = styled.div`
  height: 100px;
  border: 2px solid #feb75d;
  border-radius: 10px;
  padding: 1rem;
`;

const Achievement = () => {
  return <AchievementWrapper>成就/其他{achieveFunc}</AchievementWrapper>;
};

export default Achievement;
