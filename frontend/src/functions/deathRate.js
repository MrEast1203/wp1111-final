function round(num) {
  let m = Number((Math.abs(num) * 100).toPrecision(15));
  return (Math.round(m) / 100) * Math.sign(num);
}
// from https://www.delftstack.com/zh-tw/howto/javascript/javascript-round-to-2-decimal-places/

const getDeathRate = (deathRate, countBuild) => {
  let addValue = 0;
  let random = Math.random();
  if (deathRate < 30) {
    addValue = Math.max(0, 2 + 1 * random - countBuild);
  } else if (deathRate < 60) {
    addValue = 4 + 2 * random - countBuild;
  } else {
    addValue = 6 + 3 * random - countBuild;
  }
  return round(deathRate + addValue);
};

export default getDeathRate;
//傳入 目前死亡率，建築次數
//回傳 新的死亡率
