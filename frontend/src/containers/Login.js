import React, { useState } from "react";
import styled from "styled-components";
import ButtonList from "./ButtonList";
import LoginModal from "../components/LoginModal";
import Modal from "../components/Modal";

const LoginWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(45deg, #000e2b, #013b63);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h1 {
    font-size: 4rem;
    margin: 0;
    color: #fff;
  }
`;

const Login = ({
  setIsLogin,
  loginState,
  setloginState,
  setName,
  id,
  checkExists,
  setCheckExists,
}) => {
  const [isManual, setIsManual] = useState(false);

  const LoginButtons = [
    { name: "新遊戲", operation: () => setloginState("new") },
    { name: "繼續", operation: () => setloginState("continue") },
    { name: "遊戲說明", operation: () => setIsManual(true) },
    // { name: "交換系統", operation: null },
  ];

  return (
    <LoginWrapper>
      <h1>網頁RPG</h1>
      <ButtonList items={LoginButtons} />
      {loginState ? (
        <LoginModal
          loginState={loginState}
          setIsLogin={setIsLogin}
          setloginState={setloginState}
          setName={setName}
          id={id}
          checkExists={checkExists}
          setCheckExists={setCheckExists}
        />
      ) : (
        <></>
      )}
      {isManual ? (
        <Modal
          messageTitle="遊戲說明"
          messageContent="https://hackmd.io/@hTj4gp5kQsSU7cJ-i_xCVg/SJyNNqx5j"
          time={null}
          setModal={() => {
            setIsManual(false);
          }}
          setTime={null}
          setDay={null}
          setBuild={null}
        />
      ) : (
        <></>
      )}
    </LoginWrapper>
  );
};

export default Login;
