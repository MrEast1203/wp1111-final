import React from "react";
import getCard from "../functions/battle_card";
import styled from "styled-components";
import Items from "../components/Items";
import BattleCard from "../components/BattleCard";

const BattleChooseWrapper = styled.div`
  background: linear-gradient(to right, #261326, #c94f44);
  height: 100vh;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

const ItemsWrpper = styled.div`
  width: 33%;
  border-radius: 10px;

  & h2 {
    color: #fff;
    font-size: 2rem;
    margin: 1rem;
  }
`;

const BattleCardsRegion = styled.div`
  width: 65%;
  display: flex;
  justify-content: space-around;
`;

const BattleChoose = ({ items, setBattleType, setBattleChoose }) => {
  const battleCard = getCard();
  const battleTypeDict = {
    Event: "事件",
    Battle: "普通戰鬥",
    Elite_Battle: "菁英戰鬥",
    Rest: "休息",
  };

  return (
    <BattleChooseWrapper>
      <ItemsWrpper>
        <h2>使用道具</h2>
        <Items items={items} />
      </ItemsWrpper>
      <BattleCardsRegion>
        <BattleCard
          content={battleTypeDict[battleCard[0]]}
          setBattleChoose={setBattleChoose}
          setBattleType={setBattleType}
        />
        <BattleCard
          content={battleTypeDict[battleCard[1]]}
          setBattleChoose={setBattleChoose}
          setBattleType={setBattleType}
        />
        <BattleCard
          content={battleTypeDict[battleCard[2]]}
          setBattleChoose={setBattleChoose}
          setBattleType={setBattleType}
        />
      </BattleCardsRegion>
    </BattleChooseWrapper>
  );
};

export default BattleChoose;
