import React from "react";
import Battle from "./Battle";
import Event from "./Event";

const BattleType = ({ battleType, character }) => {
  return battleType === "休息" ? (
    <></>
  ) : battleType === "事件" ? (
    <Event />
  ) : (
    <Battle battleType={battleType} character={character} />
  );
};

export default BattleType;
