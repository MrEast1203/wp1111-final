import React, { useState } from "react";
import styled from "styled-components";
import ButtonList from "./ButtonList";
import LoginModal from "../components/LoginModal";

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
  const LoginButtons = [
    { name: "新遊戲", operation: () => setloginState("new") },
    { name: "繼續", operation: () => setloginState("continue") },
    { name: "遊戲說明", operation: null },
    { name: "交換系統", operation: null },
  ];

  return (
    <LoginWrapper>
      <h1>遊戲名稱</h1>
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
    </LoginWrapper>
  );
};

export default Login;
