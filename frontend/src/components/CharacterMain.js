import React from "react";
import styled from "styled-components";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { TbSwords } from "react-icons/tb";
import { BiShield } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import Money from "./Money";

const CharacterWrapper = styled.div`
  margin: 0 1%;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const CharacterImg = styled.img`
  width: 15rem;
  height: 15rem;
  display: block;
  margin: 0 auto;
`;

const CharacterName = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const CharacterInfo = styled.ul`
  width: 80%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem auto;
  padding: 0;

  & li {
    display: flex;
    align-items: center;
  }
`;

const CharacterMain = ({ name, energy, atk, def, hp, money }) => {
  return (
    <CharacterWrapper>
      <div>
        <CharacterName>{name}</CharacterName>
        <Money money={money} />
      </div>
      <CharacterImg src={require("../images/Hero-sample.png")} alt={name} />
      <CharacterInfo>
        <li className="energy">
          <HiOutlineLightningBolt /> {energy}
        </li>
        <li className="atk">
          <TbSwords /> {atk}
        </li>
        <li className="def">
          <BiShield /> {def}
        </li>
        <li className="hp">
          <FiHeart /> {hp}
        </li>
      </CharacterInfo>
    </CharacterWrapper>
  );
};

export default CharacterMain;
