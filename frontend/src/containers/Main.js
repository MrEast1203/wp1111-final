import React, { useEffect, useRef, useState } from "react";
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
import initHero from "../functions/initHero";
import createHero from "../functions/hero/createHero";
import updateHero from "../functions/hero/updateHero";

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

const Main = ({ name, loginState, id }) => {
  const [isShop, setIsShop] = useState(false);
  const [isBattle, setIsBattle] = useState(false);
  const [isBuild, setIsBuild] = useState(false);
  const [IsTrain, setIsTrain] = useState(false);
  const [isRest, setIsRest] = useState(false);

  //////////////玩家Data//////////////////////
  const playerName = "";
  const [energy, setEnergy] = useState(5);
  const [atk, setAtk] = useState(30);
  const [hp, setHp] = useState(400);
  const [max_hp, setMax_hp] = useState(400);
  const [money, setMoney] = useState(200);
  const [items, setItems] = useState([]);
  const [achieve, setAchieve] = useState([]);
  const [itemsForDB, setItemsForDB] = useState([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1,
  ]);
  const [achieveForDB, setAchieveForDB] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  ///////////////////////////////////////////

  ////////////// 回合用 /////////////////////////
  // const [turn, setTurn] = useState(0);
  const [day, setDay] = useState(1);
  const [time, setTime] = useState(0);
  const [build, setBuild] = useState(0);
  const [trained, setTrained] = useState(false);
  const [deathRate, setDeathRate] = useState(0);
  const dayparts = ["早上", "下午", "晚上"];
  // console.log("day", day);
  // console.log("time", time);
  const count = useRef(false);
  const count2 = useRef(false);
  let checkNewGame = true;
  useEffect(() => {
    console.log("init hero");
    initHero(
      name,
      setEnergy,
      setAtk,
      setHp,
      setMax_hp,
      setMoney,
      setItemsForDB,
      setAchieveForDB,
      loginState
    )
      .then((data) => {
        // console.log(data[0]);
        if (data[0].turn > 0) {
          checkNewGame = false;
          setDay(data[0].turn);
          setDeathRate(data[0].deathRate);
          // setAchieveForDB(data[0].achieve);
          // setItemsForDB(data[0].item);
        }
      })
      .catch((err) => {
        if (err) {
          console.log("createHero");
          console.log("id", id);
          console.log("name", name);
          createHero(id, name);
        }
      });
  }, []);
  useEffect(() => {
    // console.log(count.current);
    if (count.current && count2.current) {
      // console.log(day);

      console.log("update hero");
      let newDeathRate = getDeathRate(deathRate, build);
      updateHero(
        0,
        "Hero for Test",
        hp,
        atk,
        itemsForDB,
        achieveForDB,
        day,
        money,
        max_hp,
        energy,
        newDeathRate
      );
      if (day > 1) setDeathRate(newDeathRate);
      setBuild(0);
      setTrained(false);
    } else if (count.current === false) {
      count.current = true;
    } else {
      count2.current = true;
      // if (day === 0) setDay(1);
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
  //  getItem(3);
  const character = {
    name: playerName,
    energy: energy,
    atk: atk,
    hp: hp,
    max_hp: max_hp,
    money: money,
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
          max_hp={character.max_hp}
          money={character.money}
        />
        <ButtonList items={MainButtons} />
      </BlockWrapper>
      <BlockWrapper>
        <DeathRate deathRate={deathRate} />
        {/* <Achievement /> */}
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
