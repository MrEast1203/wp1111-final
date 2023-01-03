import React from "react";
import styled from "styled-components";
import getBattleCards from "../functions/battle_card"

const BattleCardButton = styled.div`
  width: 15rem;
  height: 10rem;
  line-height: 10rem;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  border-radius: 10px;
  background: #261326;
  margin: auto 0;
  transition: 0.4s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0px 0px 0.8rem #fff;
  }
`;

const BattleCard = ({ content, setBattleType, setBattleChoose }) => {
  return (
    <BattleCardButton
      onClick={() => {
        setBattleChoose(true);
        setBattleType(content);
      }}
    >
      {content}
    </BattleCardButton>
  );
};

export default BattleCard;
