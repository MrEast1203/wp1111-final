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
import Battle from "./Battle";
import BattleChoose from "./BattleChoose";
import getDeathRate from "../functions/deathRate";
import initHero from "../functions/initHero";
import createHero from "../functions/hero/createHero";
import updateHero from "../functions/hero/updateHero";
import newEvent from "../functions/event";
import Event from "./Event";

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

const Main = ({ name, loginState, id, setIsLogin }) => {
  // const [isShop, setIsShop] = useState(false);
  const [isBattle, setIsBattle] = useState(false);
  const [isBuild, setIsBuild] = useState(false);
  const [IsTrain, setIsTrain] = useState(false);
  const [isRest, setIsRest] = useState(false);
  const [isEvent, setIsEvent] = useState(false);

  //////////////玩家Data//////////////////////
  const [playerName, setPlayerName] = useState(
    loginState === "new" ? name : ""
  );
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
  const [event, setEvent] = useState({});
  const dayparts = ["早上", "下午", "晚上"];
  const [gameOver, setGameOver] = useState(false);
  // console.log("day", day);
  // console.log("time", time);
  const count = useRef(false);
  const count2 = useRef(true);
  let checkNewGame = true;
  useEffect(() => {
    console.log("init hero");
    if (loginState === "continue") {
      initHero(
        name,
        setEnergy,
        setAtk,
        setHp,
        setMax_hp,
        setMoney,
        setItemsForDB,
        setAchieveForDB,
        loginState,
        setPlayerName,
        setDay,
        setDeathRate
      );
    } else {
      console.log("createHero");
      console.log("id", id);
      console.log("name", name);
      createHero(id, name);
    }
  }, []);
  useEffect(() => {
    // console.log(count.current);
    if (count.current && count2.current) {
      // console.log(day);
      if (day === 3) {
        console.log("出現event 1");
        // getEvent(1, setEvent)
        // setIsEvent(true);
        console.log("event", event);
      }
      if (day === 14) {
        console.log("出現event 0");
      }
      if (day === 21) {
        console.log("出現event 2");
      }
      console.log("update hero");
      let newDeathRate = getDeathRate(deathRate, build);
      let ids = loginState === "new" ? id : name;
      updateHero(
        ids,
        playerName,
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
      if (newDeathRate >= 100 || hp <= 0) setGameOver(true);
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
  useEffect(() => {
    // setGameOver(false);
    if (gameOver === true) {
      let ids = loginState === "new" ? id : name;
      updateHero(
        ids,
        playerName,
        400,
        30,
        itemsForDB,
        achieveForDB,
        1,
        200,
        400,
        5,
        0
      );
      console.log("event GG");
      // setIsLogin(false);
    }
  }, [gameOver]);
  useEffect(() => {
    if (trained === true) {
      setHp((prev) => prev - 100);
      // setMax_hp((prev) => prev + 100);
      // setAtk((prev) => prev + 30);
      setEnergy((prev) => prev + 3);
      setTrained(false);
    }
  }, [trained]);
  useEffect(() => {
    if (isRest === true) {
      let newHp = Math.floor(Math.min(max_hp, hp * 1.2));
      setHp(newHp);
    }
  }, [isRest]);

  const MainButtons = [
    {
      name: "戰鬥",
      operation: () => {
        if (energy > 0) setIsBattle(true);
      },
    },
    {
      name: "訓練",
      operation: () => {
        if (time <= 1) {
          setIsTrain(true);
          setTrained(true);
        }
      },
    },
    { name: "建築", operation: () => setIsBuild(true) },
    // { name: "商店", operation: () => setIsShop(true) },
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
    setAttack: setAtk,
    setHealth: setHp,
    setMaxHealth: setMax_hp,
    setBattleCard: setEnergy,
    time: time,
    setTime: setTime,
    setDay: setDay,
  };

  return isBattle ? (
    <Battle character={character} battleType="戰鬥" setIsBattle={setIsBattle} />
  ) : // ) : isShop ? (
  //   <Shop
  //     money={character.money}
  //     items={character.items}
  //     setIsShop={() => setIsShop(false)}
  //   />
  isEvent ? (
    <Event setIsEvent={setIsEvent} setIsBattle={setIsBattle} />
  ) : gameOver ? (
    <Modal
      messageTitle="GameOver"
      messageContent="You Lose"
      time={"gg"}
      setModal={setIsLogin}
    />
  ) : (
    <MainWrapper>
      <BlockWrapper>
        <Period timePeriod={dayparts[time]} days={day} />
        {/* <ItemsWrpper>
          <Items items={character.items} />
        </ItemsWrpper> */}
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
