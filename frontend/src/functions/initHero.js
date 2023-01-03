import getHero from "./hero/getHero";
const initHero = async (
  id,
  setEnergy,
  setAtk,
  setHp,
  setMax_hp,
  setMoney,
  setItemsForDB,
  setAchieveForDB,
  loginState,
  setPlayerName
) => {
  let data;
  if (loginState === "continue") data = await getHero(id);
  else data = await getHero("-1fsafgsg");
  //   console.log("hi", data[0]);
  setPlayerName(data[0].name);
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
