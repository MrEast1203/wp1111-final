import React from "react";
import styled from "styled-components";

const BattleTitle = styled.h2`
  font-size: 4rem;
  margin: 0;
`;

const CharacterRegion = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 3rem;
  display: flex;
  align-items: flex-start;

  & img {
    width: 30rem;
    height: 30rem;
  }

  & ul {
    list-style: none;
    font-size: 2rem;

    & li {
      margin: 1.5rem 0;
    }
  }

  & i {
    margin-right: 0.5rem;
  }
`;

const EnemyRegion = styled.div`
  position: absolute;
  top: 1rem;
  right: 3rem;
  display: flex;
  align-items: flex-start;

  & img {
    width: 30rem;
    height: 30rem;
  }

  & ul {
    list-style: none;
    font-size: 2rem;

    & li {
      margin: 1.5rem 0;
    }
  }

  & i {
    margin-right: 0.5rem;
  }
`;

const BattleBar = styled.div``;

const Battle = ({ battleType, character, enemy }) => {
  return (
    <>
      <BattleTitle>{battleType} 戰鬥</BattleTitle>
      <CharacterRegion>
        <ul>
          <li>{character.name}</li>
          <li>
            <i className="fa-solid fa-hand-fist"></i> {character.atk}
          </li>
          <li>
            <i className="fa-solid fa-shield"></i>
            {character.def}
          </li>
          <li>
            <i className="fa-solid fa-heart"></i>
            {character.hp}
          </li>
        </ul>
        <img src={require("../images/Hero-sample.png")} alt={character.name} />
      </CharacterRegion>
      <EnemyRegion>
        <img src={require("../images/monster.png")} alt={character.name} />
        <ul>
          <li>{enemy.name}</li>
          <li>
            <i className="fa-solid fa-hand-fist"></i> {enemy.atk}
          </li>
          <li>
            <i className="fa-solid fa-shield"></i>
            {enemy.def}
          </li>
          <li>
            <i className="fa-solid fa-heart"></i>
            {enemy.hp}
          </li>
        </ul>
      </EnemyRegion>
      <BattleBar></BattleBar>
    </>
  );
};

export default Battle;
