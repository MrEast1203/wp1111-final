import React from "react";
import styled from "styled-components";

const CharacterWrapper = styled.div`
  margin: 0 1%;
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

const CharacterInfo = styled.h3`
  font-size: 1.7rem;
  text-align: center;
`;

const CharacterMain = ({ name, energy, atk, def, hp }) => {
  return (
    <CharacterWrapper>
      <CharacterName>{name}</CharacterName>
      <CharacterImg src={require("../images/Hero-sample.png")} alt={name} />
      <CharacterInfo>
        <i className="fa-solid fa-bolt"></i> {energy} /{" "}
        <i className="fa-solid fa-hand-fist"></i> {atk} /{" "}
        <i className="fa-solid fa-shield"></i> {def} /{" "}
        <i className="fa-solid fa-heart"></i> {hp}
      </CharacterInfo>
    </CharacterWrapper>
  );
};

export default CharacterMain;
