import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ModalWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalCard = styled.div`
  width: 30rem;
  height: 20rem;
  word-wrap: break-word;
  background: linear-gradient(45deg, #000e2b, #013b63);
  color: #fff;
  border: 2px solid #feb75d;
  border-radius: 10px;
  padding: 2.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & h2 {
    margin: 0;
    text-align: center;
    font-size: 2.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #fff;
  }

  & p {
    margin: 1rem 0;
    font-size: 1.5rem;
  }

  & a {
    position: absolute;
    bottom: 1rem;
    left: 2rem;
    right: 2rem;
  }
`;

const Modal = ({ messageTitle, messageContent, setModal }) => {
  return (
    <ModalWrapper>
      <ModalCard>
        <h2>{messageTitle}</h2>
        <p>{messageContent}</p>
        <Button content="好的" operation={setModal} />
      </ModalCard>
    </ModalWrapper>
  );
};

export default Modal;
