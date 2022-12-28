import React, { useEffect } from "react";
import styled from "styled-components";
import { TbSwords } from "react-icons/tb";
import { BiShield } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";

const BattleTitle = styled.h2`
  font-size: 4rem;
  margin: 1rem;
`;

const BattleRegion = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;

  &.character {
    bottom: 1rem;
    left: 3rem;
  }

  &.enemy {
    top: 1rem;
    right: 3rem;
  }

  & img {
    width: 30rem;
    height: 30rem;
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

const BattleBar = styled.div`
  width: 50rem;
  background: lightgrey;
  position: absolute;
  bottom: 5rem;
  right: 2rem;

  & .bar {
    width: 0;
    height: 3rem;
    background: green;
  }
`;

const Battle = ({ battleType, character, enemy }) => {
  const handleBattleBar = () => {
    const body = document.querySelector("body");
    const box = document.querySelector(".bar");
    let id = -1;
    let width = 0;
    const showProgress = (e) => {
      if (width >= 100) width = 0;
      width += 1;
      box.style.width = width + "%";
    };
    const spacePress = (e) => {
      if (id === -1 && e.code === "Space") {
        id = setInterval(showProgress, 10);
      } else {
        clearInterval(id);
        id = -1;
        width = 0;
      }
    };

    body.addEventListener("keypress", spacePress);
  };

  useEffect(() => {
    handleBattleBar();
  }, []);

  return (
    <>
      <BattleTitle>{battleType} 戰鬥</BattleTitle>
      <BattleRegion className="character">
        <ul>
          <li>{character.name}</li>
          <li>
            <TbSwords />
            {character.atk}
          </li>
          <li>
            <BiShield />
            {character.def}
          </li>
          <li>
            <FiHeart />
            {character.hp}
          </li>
        </ul>
        <img src={require("../images/Hero-sample.png")} alt={character.name} />
      </BattleRegion>
      <BattleRegion className="enemy">
        <img src={require("../images/monster.png")} alt={character.name} />
        <ul>
          <li>{enemy.name}</li>
          <li>
            <TbSwords />
            {enemy.atk}
          </li>
          <li>
            <BiShield />
            {enemy.def}
          </li>
          <li>
            <FiHeart />
            {enemy.hp}
          </li>
        </ul>
      </BattleRegion>
      <BattleBar>
        <div className="bar"></div>
      </BattleBar>
    </>
  );
};

export default Battle;
