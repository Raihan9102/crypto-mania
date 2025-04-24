import React, { useState } from "react";
import Coinitem from "./Coinitem";
import "./Coins.css";
import Coin from "../routes/coin";
import { Link } from "react-router-dom";
import CryptoNews from "./cryptoNews";

const Coins = (props) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 10;

  const filteredCoins = props.coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  const nextPage = () => {
    if (indexOfLastCoin < filteredCoins.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <div className="home">
        <h1>Crypto Marketplace</h1>
        <p>Selamat Datang di Crypto Mania Marketplace</p>
      </div>
      <div>
        <div className="search">
          <input
            type="text"
            placeholder="Search for a Crypto Coin..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coins</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Market Cap</p>
        </div>

        {currentCoins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <Coinitem coins={coins} />
            </Link>
          );
        })}

        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={indexOfLastCoin >= filteredCoins.length}
          >
            Next
          </button>
        </div>

        {/* Render the CryptoNews component */}
        <div className="crypto-news-section">
          <h2>Latest Cryptocurrency News</h2>
          <CryptoNews />
        </div>
      </div>
    </div>
  );
};

export default Coins;
