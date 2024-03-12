import React from "react";
import { Link } from "react-router-dom";

function Coin({ name, icon, price, symbol, id }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 text-center">
      <Link to={`/coin/${id}`} className="coin-con">
        <h1 className="text-light">{name}</h1>
        <img src={icon} alt={`${name}`} />
        <h3 className="text-secondary-emphasis">Price: ₱{price.toLocaleString()}</h3>
        <h3 className="text-secondary-emphasis">Symbol: {symbol}</h3>
      </Link>
    </div>
  );
}

export default Coin;
