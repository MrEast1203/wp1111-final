import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Modal from "./Modal";

const LoginModalWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const LoginModalCard = styled.div`
  width: 30rem;
  height: 20rem;
  word-wrap: break-word;
  background: linear-gradient(45deg, #000e2b, #013b63);
  color: #fff;
  border: 2px solid #feb75d;
  border-radius: 10px;
  padding: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & h2 {
    margin: 0;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  & input {
    width: 20rem;
    font-size: 2rem;
    padding: 0.5rem;
    outline: none;
  }

  & a {
    margin: 2rem 0;
  }
`;

const LoginModal = ({ loginState, setIsLogin, setloginState }) => {
  const [info, setInfo] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <LoginModalWrapper>
      {confirmed ? (
        <Modal
          messageTitle="提示"
          messageContent={`歡迎！ ${info}`}
          time={null}
          setModal={() => setIsLogin(true)}
          setTime={null}
          setDay={null}
          setBuild={null}
        />
      ) : (
        <LoginModalCard>
          <h2>請輸入您的{loginState === "new" ? "英雄名稱" : "ID"}</h2>
          <input value={info} onChange={(e) => setInfo(e.target.value)} />
          <Button
            content="確定"
            operation={() => {
              if (!info) return;
              setConfirmed(true);
            }}
          />
          <Button
            content="取消"
            operation={() => {
              setloginState("");
            }}
          />
        </LoginModalCard>
      )}
    </LoginModalWrapper>
  );
};

export default LoginModal;
