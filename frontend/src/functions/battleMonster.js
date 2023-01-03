import getMonster from "./monster";

const battleMonster = async (id, setName, setAtk, setHp, setAtkImg) => {
  const data = await getMonster(id);
  setName(data[0].name);
  setAtk(data[0].Atk);
  setHp(data[0].Life);
  setAtkImg(data[0].img_atk);
};
export default battleMonster;
