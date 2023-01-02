import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Items from "../components/Items";
import Money from "../components/Money";

const ShopWrapper = styled.div`
  background: linear-gradient(45deg, #171516, #2b3c1a);
  height: 100vh;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  box-sizing: border-box;
`;

const ShopList = styled.div`
  width: 45%;
  height: 80%;
  padding: 0;
  border: 2px solid #e99a24;
  border-radius: 10px;

  & h2 {
    color: #fff;
    font-size: 2rem;
    margin: 1rem;
    text-align: center;
  }
`;

const BottomRegion = styled.ul`
  width: 20rem;
  list-style: none;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 3%;
  right: 2%;

  & li {
    width: 10rem;
  }
`;

const testItems = [
  { name: "Item1", content: "道具1\n+5 戰鬥力" },
  { name: "Item2", content: "道具2\n回復血量" },
  { name: "Item3", content: "道具3\n閃避攻擊" },
  { name: "Item4", content: "道具4\n+3 速度" },
  { name: "Item5", content: "道具5\n+12 戰鬥力" },
  { name: "Item6", content: "道具6\n多一回合就可以有更多機會贏了" },
  { name: "Item7", content: "效果效果" },
  { name: "Item8", content: "效果效果" },
  { name: "Item9", content: "效果效果" },
  { name: "Item10", content: "效果效果" },
  { name: "Item11", content: "效果效果" },
];

const Shop = ({ items, money, setIsShop }) => {
  return (
    <ShopWrapper>
      <ShopList>
        <h2>販賣道具</h2>
        <Items items={items} />
      </ShopList>

      <ShopList>
        <h2>購買道具</h2>
        <Items items={testItems} />
      </ShopList>
      <BottomRegion>
        <li>
          <Money money={money} />
        </li>
        <li>
          <Button content="離開" operation={setIsShop} />
        </li>
      </BottomRegion>
    </ShopWrapper>
  );
};

export default Shop;
