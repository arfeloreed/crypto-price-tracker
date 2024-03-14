import React, { useEffect, useState } from "react";
// import fetch from "node-fetch";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// components
import Coin from "./Coin";
import Navbar from "./Navbar";

function Home() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&per_page=250&precision=2";
  const myApiKey = process.env.REACT_APP_MY_API;
  // const options = {
  //   method: "GET",
  //   headers: { "x-cg-demo-api-key": myApiKey },
  // };
  const [cryptoList, setCryptoList] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");

  async function getCoins() {
    try {
      const response = await axios.get(url, {
        headers: { "x-cg-demo-api-key": myApiKey },
      });
      setCryptoList(response.data);
    } catch (err) {
      console.log("error fetch: ", err);
    }
  }

  // useEffect(() => {
  //   fetch(url, options)
  //     .then((res) => res.json())
  //     .then((json) => setCryptoList(json))
  //     .catch((err) => console.log("error: ", err));
  // }, []);

  useEffect(() => {
    getCoins();
  }, []);

  const coins =
    cryptoList.length > 0 &&
    cryptoList.filter((coin) => coin.name.toLowerCase().includes(searchCoin));

  return (
    <div className="home-con">
      <Navbar />

      <div className="container text-center cryptoSearch">
        <span className="position-relative">
          <input
            type="text"
            placeholder="Enter coin name..."
            className="form-control form-control-lg"
            onChange={(ev) => setSearchCoin(ev.target.value.toLowerCase())}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>

      <div className="container px-5 px-sm-0">
        <div className="row g-3 g-md-5">
          {searchCoin ? (
            coins.length > 0 ? (
              coins.map((coin) => {
                return (
                  <Coin
                    key={coin.id}
                    id={coin.id}
                    name={coin.name}
                    icon={coin.image}
                    price={coin.current_price}
                    symbol={coin.symbol}
                  />
                );
              })
            ) : (
              <h2>No coin record.</h2>
            )
          ) : (
            cryptoList.map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  id={coin.id}
                  name={coin.name}
                  icon={coin.image}
                  price={coin.current_price}
                  symbol={coin.symbol}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
