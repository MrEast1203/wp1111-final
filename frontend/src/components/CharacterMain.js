import React from "react";
import styled from "styled-components";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { TbSwords } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
// import Money from "./Money";

const CharacterWrapper = styled.div`
  margin: 0 1%;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const CharacterImg = styled.img`
  width: 10rem;
  height: 10rem;
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

const CharacterMain = ({ name, energy, atk, hp, max_hp, money }) => {
  return (
    <CharacterWrapper>
      <div>
        <CharacterName>{name}</CharacterName>
        {/* <Money money={money} /> */}
      </div>
      <CharacterImg src={"https://i.imgur.com/ugKc2G9.gif"} alt={name} />
      <CharacterInfo>
        <li className="energy">
          <HiOutlineLightningBolt style={{ marginRight: "0.5rem" }} /> {energy}
        </li>
        <li className="atk">
          <TbSwords style={{ marginRight: "0.5rem" }} /> {atk}
        </li>
        <li className="hp">
          <FiHeart style={{ marginRight: "0.5rem" }} /> {hp}/{max_hp}
        </li>
      </CharacterInfo>
    </CharacterWrapper>
  );
};

export default CharacterMain;
