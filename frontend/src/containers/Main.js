import React, { useEffect, useState } from "react";
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
import getDeathRate from "../functions/deathRate";
import getItem from "../functions/item"

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

  ////////////// 回合用 /////////////////////////
  const [turn, setTurn] = useState(0);
  const [day, setDay] = useState(0);
  const [time, setTime] = useState(0);
  const [build, setBuild] = useState(0);
  const [trained, setTrained] = useState(false);
  const [deathRate, setDeathRate] = useState(0);
  const dayparts = ["早上", "下午", "晚上"];
  // console.log("day", day);
  // console.log("time", time);
  useEffect(() => {
    // console.log(day);
    if (day === 0) {
      console.log("init hero");
      setDay(1);
    } else {
      console.log("update hero");
      setDeathRate(getDeathRate(deathRate, build));
      setBuild(0);
      setTrained(false);
    }
  }, [day]);
  /////////////////////////////////////////////

  const MainButtons = [
    { name: "戰鬥", operation: () => setIsBattle(true) },
    {
      name: "訓練",
      operation: () => {
        if (time <= 1) setIsTrain(true);
        setTrained(true);
      },
    },
    { name: "建築", operation: () => setIsBuild(true) },
    { name: "商店", operation: () => setIsShop(true) },
    { name: "休息", operation: () => setIsRest(true) },
  ];
   getItem(3);
  const character = { 
    name: "無名英雄",
    energy: 10,
    atk: 10,
    hp: 10,
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
    <BattleChoose character={character} />
  ) : isShop ? (
    <Shop
      money={character.money}
      items={character.items}
      setIsShop={() => setIsShop(false)}
    />
  ) : (
    <MainWrapper>
      <BlockWrapper>
        <Period timePeriod={dayparts[time]} days={day} />
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
          money={character.money}
        />
        <ButtonList items={MainButtons} />
      </BlockWrapper>
      <BlockWrapper>
        <DeathRate deathRate={deathRate} />
        <Achievement />
      </BlockWrapper>
      {isBuild ? (
        <Modal
          messageTitle="建築"
          messageContent="成功建造防禦工事！"
          time={time}
          setModal={setIsBuild}
          setTime={setTime}
          setDay={setDay}
          setBuild={setBuild}
        />
      ) : (
        <></>
      )}
      {IsTrain ? (
        <Modal
          messageTitle="訓練"
          messageContent="訓練成功！"
          time={time}
          setModal={setIsTrain}
          setTime={setTime}
          setDay={setDay}
          setBuild={"train"}
        />
      ) : isRest ? (
        <Modal
          messageTitle="休息"
          messageContent="休息一回合，回復 20% 生命。"
          time={time}
          setModal={setIsRest}
          setTime={setTime}
          setDay={setDay}
          setBuild={"rest"}
        />
      ) : (
        <></>
      )}
    </MainWrapper>
  );
};

export default Main;
