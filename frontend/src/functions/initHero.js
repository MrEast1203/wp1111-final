import getHero from "./hero/getHero";
const initHero = async (
  id,
  setEnergy,
  setAtk,
  setHp,
  setMax_hp,
  setMoney,
  setItemsForDB,
  setAchieveForDB
) => {
  const data = await getHero(id);
  //   console.log("hi", data[0]);
  setEnergy(data[0].battle_card);
  setAtk(data[0].atk);
  setHp(data[0].life);
  setMax_hp(data[0].max_life);
  setMoney(data[0].money);
  setItemsForDB(data[0].item);
  setAchieveForDB(data[0].achieve);
  return data;
};

export default initHero;
