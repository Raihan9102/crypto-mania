import React, { useState } from "react";
import "./Coins.css";

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
        <div className="table-container">
          <table className="crypto-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Coins</th>
                <th>Price</th>
                <th>24h</th>
                <th className="hide-mobile">Volume</th>
                <th className="hide-mobile">Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {currentCoins.map((coins) => (
                <tr key={coins.id} onClick={() => window.location.href = `/coin/${coins.id}`} className="crypto-row">
                  <td>{coins.market_cap_rank}</td>
                  <td className="img-symbol">
                    <img src={coins.image} alt="" />
                    {coins.symbol.toUpperCase()}
                  </td>
                  <td>${coins.current_price.toLocaleString()}</td>
                  <td>{coins.price_change_percentage_24h.toFixed(2)}%</td>
                  <td className="hide-mobile">${coins.total_volume.toLocaleString()}</td>
                  <td className="hide-mobile">${coins.market_cap.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
      </div>  
      <footer class="footer">
        <p>2025 CryptoMania</p>
      </footer>
    </div>
  );
};

export default Coins;
