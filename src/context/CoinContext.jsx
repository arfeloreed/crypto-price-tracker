import React, { useState, createContext } from "react";

export const CoinContext = createContext();

export function CoinContextProvider(props) {
  const [coinId, setCoinId] = useState("");

  return (
    <CoinContext.Provider value={{ coinId, setCoinId }}>
      {props.children}
    </CoinContext.Provider>
  );
}
