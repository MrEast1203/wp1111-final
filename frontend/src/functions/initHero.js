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
  setPlayerName,
  setDay,
  setDeathRate
) => {
  console.log("id", id);
  const data = await getHero(id)
    .then((data) => {
      console.log("data", data);
      setPlayerName(data[0].name);
      setEnergy(data[0].battle_card);
      setAtk(data[0].atk);
      setHp(data[0].life);
      setMax_hp(data[0].max_life);
      setMoney(data[0].money);
      setItemsForDB(data[0].item);
      setAchieveForDB(data[0].achieve);
      setDay(data[0].turn);
      setDeathRate(data[0].deathRate);
    })
    .catch((err) => console.log("err", err));
  // console.log("id", id);
  // console.log("loginstate", loginState);
  // if (loginState === "continue") {
  //   data = await getHero(id);
  //   // console.log("here");
  // } else data = await getHero("-1fsafgsg");
  console.log("hi", data);
  // setPlayerName(data[0].name);
  // setEnergy(data[0].battle_card);
  // setAtk(data[0].atk);
  // setHp(data[0].life);
  // setMax_hp(data[0].max_life);
  // setMoney(data[0].money);
  // setItemsForDB(data[0].item);
  // setAchieveForDB(data[0].achieve);
  // setDay(data[0].turn);
  // setDeathRate(data[0].deathRate);
  return data;
};

export default initHero;
