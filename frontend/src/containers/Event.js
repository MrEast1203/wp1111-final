import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const EventWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #261326, #c94f44);
  padding: 1rem;
  box-sizing: border-box;
`;

const EventImg = styled.img`
  display: block;
  width: 25rem;
  margin: 1rem auto;
`;

const EventDescription = styled.div`
  width: 80%;
  margin: 1rem auto;
  color: #fff;
  padding: 1rem;
  border: 2px solid #261326;
  border-radius: 10px;
  box-sizing: border-box;

  & h2 {
    margin: 0 0 1rem 0;
    font-size: 2rem;
  }

  & p {
    margin: 0;
    font-size: 1.5rem;
  }
`;

const EventOptions = styled.ul`
  width: 50rem;
  margin: 2rem auto;
  list-style: none;
  display: flex;
  justify-content: space-around;

  & a {
    width: 10rem;
    height: 2rem;
  }
`;

const Event = ({
  setIsEvent,
  setIsBattle,
  setMonsterID,
  day,
  setDeathRate,
}) => {
  let testEvent;
  if (day === 10) {
    testEvent = {
      id: 7,
      name: "First Boss",
      description: "魔王軍來了, 勇者快打敗他！",
      options: ["Ok", "打不蠃啦"],
      item_get: [0, -1],
      buff_value: [0, 0],
      img: "https://i.imgur.com/G8Drp2I.png",
    };
  } else if (day === 20) {
    testEvent = {
      id: 7,
      name: "Second Boss",
      description: "勇者A夢救命!",
      options: ["我來了", "打咩打咩"],
      item_get: [1, -1],
      buff_value: [0, 0],
      img: "https://i.imgur.com/KFlI9Nr.png",
    };
  } else if (day === 30) {
    testEvent = {
      id: 7,
      name: "Final Boss",
      description: "魔王來了！！！！",
      options: ["上呀！！！！"],
      item_get: [2],
      buff_value: [0, 0],
      img: "https://i.imgur.com/6uG2wLl.png",
    };
  } else {
    testEvent = {
      id: 7,
      name: "First Boss",
      description: "魔王軍來了, 勇者快打敗他！",
      options: ["Ok", "打不蠃啦"],
      item_get: [0, -1],
      buff_value: [0, 0],
      img: "https://i.imgur.com/71vNzDp.png",
    };
  }

  const eventOptionsBtn = [];

  for (let i = 0; i < testEvent.options.length; i++) {
    eventOptionsBtn.push(
      <li>
        <Button
          content={testEvent.options[i]}
          buff_value={testEvent.buff_value[i]}
          operation={() => {
            if (testEvent.item_get[i] >= 0) {
              setMonsterID(testEvent.item_get[i]);
              setIsBattle(true);
              setIsEvent(false);
            } else {
              setDeathRate((prev) => prev + Math.floor(10));
              setIsEvent(false);
            }
          }}
        />
      </li>
    );
  }

  return (
    <EventWrapper>
      <EventImg src={testEvent.img} alt="eventImg" />
      <EventDescription>
        <h2>{testEvent.name}：</h2>
        <p>{testEvent.description}</p>
      </EventDescription>
      <EventOptions>{eventOptionsBtn}</EventOptions>
    </EventWrapper>
  );
};

export default Event;
