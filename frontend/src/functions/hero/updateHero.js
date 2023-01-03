import instance from "../../api";
const updateHero = async (
  ids,
  heroName,
  heroLife,
  heroAtk,
  heroItem,
  heroAchieve,
  heroTurn,
  heroMoney,
  heroMaxLife,
  heroBattleCard,
  heroDeathRate
) => {
  const {
    data: { message, contents },
  } = await instance.post("/updateHero", {
    id: ids,
    name: heroName,
    life: heroLife,
    atk: heroAtk,
    item: heroItem,
    achieve: heroAchieve,
    turn: heroTurn,
    money: heroMoney,
    max_life: heroMaxLife,
    battle_card: heroBattleCard,
    deathRate: heroDeathRate,
  });
  console.log("updateHero", contents);
  return contents;
};
export default updateHero;
