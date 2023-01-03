import monsterRoute from './monster';
import achieveRoute from './achieve';
import eventRoute from './event';
import heroRoute from './hero';
import itemRoute from './item';

const wrap =
  (fn) =>
  (...args) =>
    fn(...args).catch(args[2]);

function main(app) {
  app.get('/api/getMonster', wrap(monsterRoute.GetMonster));
  app.get('/api/getAchieve', wrap(achieveRoute.GetAchieve));
  app.get('/api/getEvent', wrap(eventRoute.GetEvent));
  app.get('/api/getHero', wrap(heroRoute.GetHero));
  app.get('/api/getItem', wrap(itemRoute.GetItem));
  app.post('/api/createHero', wrap(heroRoute.CreateHero));
  app.post('/api/updateHero', wrap(heroRoute.UpdateHero));
  app.post('/api/createMonster', wrap(heroRoute.CreateMonster));
  app.post('/api/updateMonster', wrap(heroRoute.UpdateMonster));
 
  
}

export default main;
