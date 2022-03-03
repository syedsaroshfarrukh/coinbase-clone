import React from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import { coins } from "../static/coins";

const Coin = ({ coin }) => {
  return (
    <Wrapper>
      <div>
        <div style={{ flex: 3 }}>
          <NamCol>
            <CoinIcon>
              <Image src={coin.logo} alt={coin.name} />
            </CoinIcon>
            <div>
              <Primary>{coin.name}</Primary>
              <Secondary>{coin.sign}</Secondary>
            </div>
          </NamCol>
        </div>
        <div style={{ flex: 2 }}>
          <div>
            <Primary>${coin.balanceUsd}</Primary>
            <Secondary>
              {coin.balanceCoin} {coin.sign}
            </Secondary>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div>
            <Primary>${coin.priceUsd}</Primary>
            <div style={{ color: coin.change < 0 ? "red" : "green" }}>
              {coin.change > 0 && "+"}
              {coin.change}%
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>${coin.allocation}</div>
        <div style={{ flex: 0 }}>
          <BsThreeDotsVertical />
        </div>
      </div>
    </Wrapper>
  );
};

export default Coin;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: cneter;
    padding: 1rem 2rem;
  }
`;
const NamCol = styled.div`
  display: flex;
  align-items: center;
`;

const CoinIcon = styled.div`
  width: 1.8rem;
  margin-right: 1rem;
`;

const Primary = styled.div`
  margin-bottom: 0.1rem;
`;

const Secondary = styled.div`
  color: #8a919e;
  font-size: 0.8rem;
`;
