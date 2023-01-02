import Monster from './models/monster';
import Achieve from './models/achieve';
import Event from './models/event';
import Item from './models/item';
import Hero from './models/hero';

import monsterData from './json/monster.json';
import achieveData from './json/achieve.json';
import eventData from './json/event.json';
import itemData from './json/item.json';
import heroData from './json/hero.json';

const dataInit = async () => {
  const checkMonster = await Monster.find();
  const no_monster = 7; //number of monster

  if (checkMonster.length !== no_monster) {
    console.log('Total of monster is not equal to default');
    await Monster.deleteMany({});
    await Monster.insertMany(monsterData);
  } else {
    console.log('Monster DB is correct');
  }

  const checkAchieve = await Achieve.find();
  const no_achieve = 13; //number of achieve

  if (checkAchieve.length !== no_achieve) {
    console.log('Total of achieve is not equal to default');
    await Achieve.deleteMany({});
    await Achieve.insertMany(achieveData);
  } else {
    console.log('Achieve DB is correct');
  }

  const checkEvent = await Event.find();
  const no_event = 25; //number of Event

  if (checkEvent.length !== no_event) {
    console.log('Total of Event is not equal to default');
    await Event.deleteMany({});
    await Event.insertMany(eventData);
  } else {
    console.log('Event DB is correct');
  }

  const checkItem = await Item.find();
  const no_Item = 40; //number of Item

  if (checkItem.length !== no_Item) {
    console.log('Total of Item is not equal to default');
    await Item.deleteMany({});
    await Item.insertMany(itemData);
  } else {
    console.log('Item DB is correct');
  }

  const checkHero = await Hero.find();
  const no_Hero = 1; //number of Item

  if (checkHero.length !== no_Hero) {
    console.log('Test Hero not exists');
    await Hero.deleteMany({});
    await Hero.insertMany(heroData);
  } else {
    console.log('Hero for test is here now');
  }
};

export { dataInit };
