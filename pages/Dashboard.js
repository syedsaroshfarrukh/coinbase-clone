import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import styled from "styled-components";
import Sidebar from "../Components/Sidebar";
import { ethers } from "ethers";
import { ThirdwebSDK } from "@3rdweb/sdk";

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_PRIVATEKEY,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);

const Dashboard = ({ address }) => {
  const [sanityToken, setSanityToken] = useState([]);
  const [thirdWebToken, setThirdWebToken] = useState([]);

  useEffect(() => {
    const getSanityAndThirdWebCoins = async () => {
      const coins = await fetch(
        "https://ic2f8o2v.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
      );
      const sanityToken = (await coins.json()).result;
      setSanityToken(sanityToken);

      let tokens = sanityToken.map((token) =>
        sdk.getTokenModule(token.contractAddress)
      );
      setThirdWebToken(tokens);
    };
    return getSanityAndThirdWebCoins();
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header
          walletAddress={address}
          sanityTokens={sanityToken}
          thirdWebTokens={thirdWebToken}
        />
        <Main
          walletAddress={address}
          sanityTokens={sanityToken}
          thirdWebTokens={thirdWebToken}
        />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`;

const MainContainer = styled.div`
  flex: 1;
`;
