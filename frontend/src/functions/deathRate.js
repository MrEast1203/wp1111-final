const getDeathRate = (deathRate, countBuild) => {
  let addValue = 0;
  let random = Math.random();
  if (deathRate < 35) {
    addValue = Math.max(0, 2 + 1 * random - countBuild);
  } else if (deathRate < 65) {
    addValue = 4 + 2 * random - countBuild;
  } else {
    addValue = 6 + 3 * random - countBuild;
  }
  return deathRate + addValue;
};

export default getDeathRate;
//傳入 目前死亡率，建築次數
//回傳 新的死亡率
