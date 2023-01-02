const getBuff = (
  heroMaxLife,
  heroAtk,
  heroLife,
  buffType,
  buffValue,
  items
) => {
  if (buffType === 'Heal') {
    let newLife = heroLife + buffValue;
    newLife = Math.min(newLife, heroMaxLife);
    return { change: 'life', value: [newLife] };
  }
  if (buffType === 'Attack') {
    return { change: 'atk', value: [heroAtk + buffValue] };
  }
  if (buffType === 'Life') {
    return {
      change: 'max_life',
      value: [heroMaxLife + buffValue, heroLife + buffValue],
    };
  }
  if (buffType === 'Both') {
    return {
      change: 'both',
      value: [
        heroMaxLife + buffValue,
        heroLife + buffValue,
        heroAtk + buffValue,
      ],
    };
  }
  if (buffType === 'Flip') {
    let newAtk = heroLife;
    let newMaxLife = heroAtk;
    let newLife = Math.min(newMaxLife, heroLife);
    return { change: 'both', value: [newMaxLife, newLife, newAtk] };
  }
  if (buffType === 'Remove') {
    for (let i = 0; i < 4; i++) {
      if (items[i + 36] > 0) items[i + 36] - 1;
    }
    return { change: 'item', value: items };
  }
};

export default getBuff;
//傳入  最大生命值,攻擊力,生命值,增益種類,增益數值,持有道具

// 回傳 object {change:(String) , value(Array[Number])}
//change = life: value: [新的生命值]
//change = atk: value: [新的攻擊力]
//change = max_life: value: [新的最大生命值, 新的生命值]
//change = both: value: [新的最大生命值, 新的生命值, 新的攻擊力]
//change = item: value: new item list
