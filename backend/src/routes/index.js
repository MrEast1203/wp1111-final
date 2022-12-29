import monsterRoute from './monster';

const wrap =
  (fn) =>
  (...args) =>
    fn(...args).catch(args[2]);

function main(app) {
  app.get('/api/getMonster', wrap(monsterRoute.GetMonster));
}

export default main;
