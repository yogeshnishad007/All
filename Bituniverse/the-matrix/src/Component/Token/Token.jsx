
import React from "react";
import "../Token/Token.css";
import Bit from "./Images/Bitcoin.png";

const Token = () => {

  const tokens = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      decimals: 18,
      market: "$100000",
      chain: "Bitcoin",
    },
    {
    id: 2,
    name: "Bitcoin",
    symbol: "BTC",
    decimals: 18,
    market: "$100000",
    chain: "Bitcoin",
  },
  {
    id: 2,
    name: "Bitcoin",
    symbol: "BTC",
    decimals: 18,
    market: "$100000",
    chain: "Bitcoin",
  },
  ];

  return (
    <>

    <div className="token-conatiner">

    
      <div className="title-box">
        <h1 className="Title1">Our</h1>
        <h1 className="Title2">Token</h1>
      </div>

      <div className="ptag-box">
        <p>Pellentesque habitant morbi tristique senectus et netus et Pellentesque habitant morbi.</p>
      </div>

      <div className="Token-box">
        {tokens.map((token) => (
          <div key={token.id} className="Token-child">
            <img src={Bit} alt="Token Logo" />

            <h6 className="Token-name">{token.name}</h6>

            <div className="detail-token">
              <p className="first">Symbol</p>
              <p className="second">{token.symbol}</p>
            </div>

            <div className="detail-token">
              <p className="first">Decimals</p>
              <p className="second">{token.decimals}</p>
            </div>

            <div className="detail-token">
              <p className="first">Market</p>
              <p className="second">{token.market}</p>
            </div>

            <div className="detail-token">
              <p className="first">Chain</p>
              <p className="second">{token.chain}</p>
            </div>

            <div className="Btn-div">
              <button className="token-btn">Details</button>
            </div>
          </div>
        ))}
      </div>

      </div>
    </>
  );
};

export default Token;
