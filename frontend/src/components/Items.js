import React from "react";
import styled from "styled-components";

const ItemList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0.8rem;
  margin: 0;
`;

const ItemBlock = styled.li`
  width: 23%;
  height: 100px;
  margin: 1% 1%;
  background: grey;
  transition: all 0.3s;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    content: attr(content);
    white-space: pre-line;
    word-break: pre-line;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    padding: 1rem;
    position: absolute;
    bottom: -100%;
    box-sizing: border-box;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:hover::after {
    transition: all 0.2s ease-out 0.2s;
    bottom: 0;
  }
`;

const Items = ({ items }) => {
  const renderedItems = items.map((ele) => {
    return <ItemBlock content={ele.content}>{ele.name}</ItemBlock>;
  });

  return <ItemList>{renderedItems}</ItemList>;
};

export default Items;
