import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TbSwords } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";

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

const Battle = ({ character, battleType }) => {
  const enemy = {
    name: "怪物",
    atk: 5,
    hp: 20,
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
        <img src={require("../images/Hero-sample.png")} alt={character.name} />
      </BattleRegion>
      <BattleRegion className="enemy">
        <img src={require("../images/monster.png")} alt={character.name} />
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
