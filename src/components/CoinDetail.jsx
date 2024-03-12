import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetch from "node-fetch";
// components
import Navbar from "./Navbar";

function CoinDetail() {
  const { id } = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&community_data=false&developer_data=false`;
  const myApiKey = process.env.REACT_APP_MY_API;
  const options = {
    method: "GET",
    headers: {
      "x-cg-demo-api-key": myApiKey,
    },
  };
  const [coinDetail, setCoinDetail] = useState({});

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setCoinDetail(json))
      .catch((err) => console.log("error: ", err));
  }, []);

  return (
    <div className="coinDetail-con">
      <Navbar />

      <div className="container text-center mt-5 text-light">
        <h1>{coinDetail?.name}</h1>
        <img src={coinDetail?.image?.large} alt={coinDetail?.name} className="my-3" />
        <h3>Symbol: {coinDetail?.symbol}</h3>

        <div className="row row-cols-1 row-cols-sm-2 mt-5">
          <p className="col lead">
            Price: ₱{coinDetail?.market_data?.current_price?.php.toLocaleString()}
          </p>
          <p className="col lead">
            Market cap: ₱{coinDetail?.market_data?.market_cap?.php.toLocaleString()}
          </p>
          <p className="col lead">
            Max supply:{" "}
            {coinDetail?.market_data?.max_supply
              ? coinDetail?.market_data?.max_supply.toLocaleString()
              : "Doesn't have a declared max supply."}
          </p>
          <p className="col lead">
            Current supply: {coinDetail?.market_data?.circulating_supply.toLocaleString()}
          </p>
        </div>

        <p
          dangerouslySetInnerHTML={{ __html: coinDetail?.description?.en }}
          className="text-justify mt-5 lead description"
        ></p>
      </div>
    </div>
  );
}

export default CoinDetail;
