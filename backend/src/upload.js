import Monster from './models/monster';

import monsterData from './json/monster.json';

const dataInit = async () => {
  const checkMonster = await Monster.find();
  const no_monster = 1; //number of monster

  if (checkMonster.length !== no_monster) {
    console.log('Total of monster is not equal to default');
    await Monster.deleteMany({});
    await Monster.insertMany(monsterData);
  } else {
    console.log('Monster DB is correct');
  }
};

export { dataInit };
