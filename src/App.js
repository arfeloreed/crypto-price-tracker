import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// context
import { CoinContextProvider } from "./context/CoinContext";
// components
import Home from "./components/Home";
import CoinDetail from "./components/CoinDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/coin/:id",
      element: <CoinDetail />,
    },
  ]);

  return (
    <>
      <CoinContextProvider>
        <RouterProvider router={router} />
      </CoinContextProvider>
    </>
  );
}

export default App;
