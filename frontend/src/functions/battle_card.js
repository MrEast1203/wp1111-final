const getCard = () => {
  let selectedEvent = [];
  for (let k = 0; k < 3; k++) {
    let random = Math.random();
    let event = ['Rest', 'Event', 'Elite_Battle', 'Battle'];
    let prob = [0.12, 0.12, 0.12, 0.64];
    let tmp = 0;
    for (let i = 3; i >= 0; i--) {
      tmp += prob[i];
      if (random <= tmp) {
        selectedEvent.push(event[i]);
        break;
      }
    }
  }
  return selectedEvent;
};
export default getCard;
// call 此function會回傳3種的battle card
