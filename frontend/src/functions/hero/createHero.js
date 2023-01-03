import instance from "../../api";
const createHero = (ids, heroName) => {
  instance.post("/createHero", {
    id: ids,
    name: heroName,
    life: 400,
    atk: 30,
    item: [
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1,
    ],
    achieve: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    turn: 1,
    money: 200,
    max_life: 400,
    battle_card: 5,
    deathRate: 0,
  });
  // console.log("createHero", contents);

  // return contents;
};
export default createHero;
