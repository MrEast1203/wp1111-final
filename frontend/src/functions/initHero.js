import getHero from "./hero/getHero";
const initHero = (
  id,
  setEnergy,
  setAtk,
  setHp,
  setMax_hp,
  setMoney,
  setItemsForDB,
  setAchieveForDB
) => {
  getHero(id);
  //   console.log("getHero");
};

export default initHero;
