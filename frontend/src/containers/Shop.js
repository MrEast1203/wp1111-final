import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Items from "../components/Items";
import Money from "../components/Money";

const ShopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem 1.5rem;
`;

const ShopKeeper = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 35rem;
`;

const ShopList = styled.ul`
  list-style: none;
  width: 55%;
  height: 33rem;
  padding: 0;
  border: 2px solid #000;
`;

const Exit = styled.div`
  position: absolute;
  bottom: 3%;
  right: 2%;
  width: 10rem;
`;

const testItems = [
  { name: "Item1", content: "道具1\n+5戰鬥力" },
  { name: "Item2", content: "道具2\n回復血量" },
  { name: "Item3", content: "道具3\n閃避攻擊" },
  { name: "Item4", content: "道具4\n+3戰鬥力" },
  { name: "Item5", content: "道具5\n+12戰鬥力" },
  { name: "Item6", content: "道具6\n多一回合" },
];

const Shop = ({ money, setIsShop }) => {
  return (
    <ShopWrapper>
      <ShopKeeper src={require("../images/shopkeeper.png")} />
      <Money money={money} />
      <ShopList>
        <Items items={testItems} />
      </ShopList>
      <Exit>
        <Button content="離開" operation={setIsShop} />
      </Exit>
    </ShopWrapper>
  );
};

export default Shop;
