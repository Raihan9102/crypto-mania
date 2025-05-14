import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Coins from "./components/Coins";
import Coin from "./routes/coin";
import Navbar from "./components/Navbar";
import About from "./routes/about";
import CryptoNews from "./routes/cryptoNews";
import AI from "./routes/AI/ai";

import "./index.css";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((Response) => {
        setCoins(Response.data);
        console.log(Response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<CryptoNews />} />
        <Route path="/AI" element={<AI />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
