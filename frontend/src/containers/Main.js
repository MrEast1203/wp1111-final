import React, { useState } from "react";
import styled from "styled-components";
import DeathRate from "../components/DeathRate";
import CharacterMain from "../components/CharacterMain";
import ButtonList from "./ButtonList";
import Period from "../components/Period";
import Money from "../components/Money";
import Items from "../components/Items";
import Achievement from "../components/Achievement";
import Shop from "./Shop";
import Battle from "./Battle";
import Modal from "../components/Modal";

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BlockWrapper = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1%;
`;

const ItemsWrpper = styled.div`
  border: 2px solid #000;
  height: 550px;
  margin: 1rem 0;
`;

const testItems = [
  { name: "Item1", content: "Content1" },
  { name: "Item2", content: "Content2" },
  { name: "Item3", content: "Content3" },
  { name: "Item4", content: "Content4" },
  { name: "Item5", content: "Content5" },
  { name: "Item6", content: "Content6" },
];

const Main = () => {
  const [isShop, setIsShop] = useState(false);
  const [isBattle, setIsBattle] = useState(false);
  const [isBuild, setIsBuild] = useState(false);
  const [IsTrain, setIsTrain] = useState(false);

  const MainButtons = [
    { name: "戰鬥", operation: () => setIsBattle(true) },
    { name: "訓練", operation: () => setIsTrain(true) },
    { name: "建築", operation: () => setIsBuild(true) },
    { name: "商店", operation: () => setIsShop(true) },
    { name: "跳過", operation: null },
  ];

  const character = {
    name: "無名英雄",
    energy: 10,
    atk: 10,
    def: 10,
    hp: 10,
    money: 1500,
  };

  const testEnemy = {
    name: "怪物",
    atk: 5,
    def: 1,
    hp: 20,
  };

  return isBattle ? (
    <Battle battleType="普通" character={character} enemy={testEnemy} />
  ) : isShop ? (
    <Shop money={character.money} setIsShop={() => setIsShop(false)} />
  ) : (
    <MainWrapper>
      <BlockWrapper>
        <Period timePeriod="早上" days="17" />
        <ItemsWrpper>
          <Items items={testItems} />
        </ItemsWrpper>
        <Money money={character.money} />
      </BlockWrapper>
      <BlockWrapper>
        <CharacterMain
          name={character.name}
          energy={character.energy}
          atk={character.atk}
          def={character.def}
          hp={character.hp}
        />
        <ButtonList items={MainButtons} />
      </BlockWrapper>
      <BlockWrapper>
        <DeathRate deathRate={30} />
        <Achievement />
      </BlockWrapper>
      {isBuild ? <Modal messageTitle="建築" messageContent="成功建造防禦工事！" setModal={setIsBuild} /> : <></>}
      {IsTrain ? <Modal messageTitle="訓練" messageContent="訓練成功！" setModal={setIsTrain} /> : <></>}
    </MainWrapper>
  );
};

export default Main;
