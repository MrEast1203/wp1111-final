import React from "react";
import styled from "styled-components";
import ButtonList from "./ButtonList";

const LoginWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(45deg, #000e2b, #013b63);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h1 {
    margin: 0;
    color: #fff;
  }
`;

const Login = ({ setIsLogin }) => {
  const LoginButtons = [
    { name: "新遊戲", operation: () => setIsLogin(true) },
    { name: "繼續", operation: null },
    { name: "遊戲說明", operation: null },
    { name: "交換系統", operation: null },
  ];

  return (
    <LoginWrapper>
      <h1>遊戲名稱</h1>
      <ButtonList items={LoginButtons} />
    </LoginWrapper>
  );
};

export default Login;
