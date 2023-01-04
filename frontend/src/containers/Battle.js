import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TbSwords } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import getMonster from "../functions/monster";
import battleMonster from "../functions/battleMonster";
import Modal from "../components/Modal";

const BattleWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #261326, #c94f44);
`;

const BattleTitle = styled.h2`
  font-size: 4rem;
  color: #fff;
  margin: 0 1rem;
`;

const BattleRegion = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  color: #fff;

  &.character {
    bottom: 1rem;
    left: 3rem;
  }

  &.enemy {
    top: 1rem;
    right: 3rem;
  }

  & img {
    width: 25rem;
    height: 25rem;
  }

  & ul {
    padding: 0;
    list-style: none;
    font-size: 2rem;
    font-weight: bold;

    & li {
      margin: 1.5rem 0;
      display: flex;
      align-items: center;
    }
  }
`;

const BattleBarRegion = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 2rem;
`;

const BattleBar = styled.div`
  width: 40rem;
  background: lightgrey;

  & .bar {
    width: 0;
    height: 3rem;
    background: #feb75d;
  }
`;

const Battle = ({ character, battleType, setIsBattle }) => {
  const [name, setName] = useState("");
  const [atk, setAtk] = useState(0);
  const [hp, setHp] = useState(1);
  const [atkImg, setAtkImg] = useState("");
  const [damageToMonster, setDamageToMonster] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (damageToMonster !== 0 && hp >= 0 && character.hp >= 0) {
      console.log("damageToMonster", damageToMonster);
      setHp(
        (prev) =>
          prev - Math.floor((character.atk * damageToMonster * 1.75) / 100)
      );
      character.setHealth(
        (prev) => prev - Math.floor(atk * (1 + Math.random()))
      );

      handleBattleBar();
    }
  }, [damageToMonster]);
  useEffect(() => {
    if ((hp <= 0 || character.hp <= 0) && isEnd === false) {
      character.setAttack((prev) => prev + 8);
      if (character.hp > 0) character.setHealth((prev) => prev + 25);
      if (character.hp > 0) character.setMaxHealth((prev) => prev + 25);
      character.setBattleCard((prev) => prev - 1);
      if (character.time === 2) {
        character.setTime(0);
        character.setDay((day) => day + 1);
      } else character.setTime((prev) => prev + 1);
      // setIsBattle(false);
      setIsEnd(true);
    }
  }, [character.hp]);

  //console.log(character);
  const enemy = {
    name: name,
    atk: atk,
    hp: hp,
  };

  const handleBattleBar = () => {
    const body = document.querySelector("body");
    const box = document.querySelector(".bar");
    let width = 0;
    const showProgress = (e) => {
      if (width >= 103) width = 0;
      width += 1;
      box.style.width = width + "%";
    };
    let id = setInterval(showProgress, 10);
    const spacePress = (e) => {
      if (e.code === "Space") {
        if (hp >= 0 && character.hp >= 0) setDamageToMonster(width);
        clearInterval(id);
        id = -1;
        width = 0;
      }
    };

    body.addEventListener("keypress", spacePress);
  };

  useEffect(() => {
    let id = Math.floor(Math.random() * 4) + 3;
    if (battleType === 0) id = 0;
    else if (battleType === 1) id = 1;
    else if (battleType === 2) id = 2;
    battleMonster(id, setName, setAtk, setHp, setAtkImg);
    handleBattleBar();
  }, []);

  return isEnd ? (
    <>
      <Modal
        messageTitle={"End"}
        messageContent={"戰鬥結束🔚"}
        time={"gg"}
        setModal={setIsBattle}
      />
      <BattleWrapper>
        <BattleTitle>{battleType}</BattleTitle>
        <BattleRegion className="character">
          <ul>
            <li>{character.name}</li>
            <li>
              <TbSwords style={{ marginRight: "0.5rem" }} />
              {character.atk}
            </li>
            <li>
              <FiHeart style={{ marginRight: "0.5rem" }} />
              {character.hp}
            </li>
          </ul>
        </BattleRegion>
        <BattleRegion className="enemy">
          <ul>
            <li>{enemy.name}</li>
            <li>
              <TbSwords style={{ marginRight: "0.5rem" }} />
              {enemy.atk}
            </li>
            <li>
              <FiHeart style={{ marginRight: "0.5rem" }} />
              {enemy.hp}
            </li>
          </ul>
        </BattleRegion>
        <BattleBarRegion>
          <BattleBar>
            <div className="bar"></div>
          </BattleBar>
        </BattleBarRegion>
      </BattleWrapper>
    </>
  ) : (
    <BattleWrapper>
      <BattleTitle>{battleType}</BattleTitle>
      <BattleRegion className="character">
        <ul>
          <li>{character.name}</li>
          <li>
            <TbSwords style={{ marginRight: "0.5rem" }} />
            {character.atk}
          </li>
          <li>
            <FiHeart style={{ marginRight: "0.5rem" }} />
            {character.hp}
          </li>
        </ul>
        <img src={"https://i.imgur.com/ugKc2G9.gif"} alt={character.name} />
      </BattleRegion>
      <BattleRegion className="enemy">
        <img src={atkImg} alt={character.name} />
        <ul>
          <li>{enemy.name}</li>
          <li>
            <TbSwords style={{ marginRight: "0.5rem" }} />
            {enemy.atk}
          </li>
          <li>
            <FiHeart style={{ marginRight: "0.5rem" }} />
            {enemy.hp}
          </li>
        </ul>
      </BattleRegion>
      <BattleBarRegion>
        <BattleBar>
          <div className="bar"></div>
        </BattleBar>
      </BattleBarRegion>
    </BattleWrapper>
  );
};

export default Battle;
