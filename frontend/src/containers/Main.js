import React, { useState } from "react";
import styled from "styled-components";
import DeathRate from "../components/DeathRate";
import CharacterMain from "../components/CharacterMain";
import ButtonList from "./ButtonList";
import Period from "../components/Period";
import Items from "../components/Items";
import Achievement from "../components/Achievement";
import Shop from "./Shop";
import Modal from "../components/Modal";
import BattleChoose from "./BattleChoose";

const MainWrapper = styled.div`
  height: 100vh;
  display: flex;
  background: linear-gradient(45deg, #000e2b, #013b63);
  justify-content: space-between;
  padding: 0.5rem;
  box-sizing: border-box;
  animate: 3s ease-in background-flow;
`;

const BlockWrapper = styled.div`
  width: 31%;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 1%;
`;

const ItemsWrpper = styled.div`
  border: 2px solid #feb75d;
  border-radius: 10px;
  margin: 0.5rem 0;
`;

const Main = () => {
  const [isShop, setIsShop] = useState(false);
  const [isBattle, setIsBattle] = useState(false);
  const [isBuild, setIsBuild] = useState(false);
  const [IsTrain, setIsTrain] = useState(false);
  const [isRest, setIsRest] = useState(false);

  const MainButtons = [
    { name: "戰鬥", operation: () => setIsBattle(true) },
    { name: "訓練", operation: () => setIsTrain(true) },
    { name: "建築", operation: () => setIsBuild(true) },
    { name: "商店", operation: () => setIsShop(true) },
    { name: "休息", operation: () => setIsRest(true) },
  ];

  const character = {
    name: "無名英雄",
    energy: 10,
    atk: 10,
    hp: 10,
    max_hp: 20,
    money: 1500,
    items: [
      { name: "Item1", content: "Content1\n售出：$100" },
      { name: "Item2", content: "Content2" },
      { name: "Item3", content: "Content3" },
      { name: "Item4", content: "Content4" },
      { name: "Item5", content: "Content5" },
      { name: "Item6", content: "Content6" },
    ],
  };

  return isBattle ? (
    <BattleChoose character={character} setIsRest={setIsRest} />
  ) : isShop ? (
    <Shop
      money={character.money}
      items={character.items}
      setIsShop={() => setIsShop(false)}
    />
  ) : (
    <MainWrapper>
      <BlockWrapper>
        <Period timePeriod="下午" days="17" />
        <ItemsWrpper>
          <Items items={character.items} />
        </ItemsWrpper>
      </BlockWrapper>
      <BlockWrapper>
        <CharacterMain
          name={character.name}
          energy={character.energy}
          atk={character.atk}
          def={character.def}
          hp={character.hp}
          max_hp={character.max_hp}
          money={character.money}
        />
        <ButtonList items={MainButtons} />
      </BlockWrapper>
      <BlockWrapper>
        <DeathRate deathRate={30} />
        <Achievement />
      </BlockWrapper>
      {isBuild ? (
        <Modal
          messageTitle="建築"
          messageContent="成功建造防禦工事！"
          setModal={() => setIsBuild(false)}
        />
      ) : (
        <></>
      )}
      {IsTrain ? (
        <Modal
          messageTitle="訓練"
          messageContent="訓練成功！"
          setModal={() => setIsTrain(false)}
        />
      ) : isRest ? (
        <Modal
          messageTitle="休息"
          messageContent="休息一回合，回復 20% 生命。"
          setModal={() => setIsRest(false)}
        />
      ) : (
        <></>
      )}
    </MainWrapper>
  );
};

export default Main;
