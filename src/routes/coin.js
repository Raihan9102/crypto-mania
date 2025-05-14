import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./coin.css";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const coinUrl = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;
  const historyUrl = `https://api.coingecko.com/api/v3/coins/${params.coinId}/market_chart?vs_currency=usd&days=360`;

  useEffect(() => {
    axios
      .get(coinUrl)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(historyUrl)
      .then((res) => {
        setHistory(res.data.prices);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [coinUrl, historyUrl]);

  const chartData = {
    labels: history.map((data) => new Date(data[0]).toLocaleDateString()),
    datasets: [
      {
        label: `${coin.name} Price (Last 360 Days)`,
        data: history.map((data) => data[1]),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="body">
      <div className="coin-container">
        <div className="content">
          <h1>{coin.name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              <img src={coin.image?.small} alt={coin.name} />
              <p>{coin.name}</p>
              <p>{coin.symbol}</p>
            </div>
            <div className="coin-price">
              {coin.market_data?.current_price ? (
                <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1>
              ) : null}
            </div>
          </div>
        </div>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="content">
            <div className="stats">
              <div className="left">
                <div className="row">
                  <h4>24 Hour Low</h4>
                  {coin.market_data?.low_24h ? (
                    <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
                  ) : null}
                </div>
                <div className="row">
                  <h4>24 Hour High</h4>
                  {coin.market_data?.high_24h ? (
                    <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
                  ) : null}
                </div>
              </div>
              <div className="right">
                <div className="row">
                  <h4>Market Cap</h4>
                  {coin.market_data?.market_cap ? (
                    <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                  ) : null}
                </div>
                <div className="row">
                  <h4>Circulating Supply</h4>
                  {coin.market_data ? (
                    <p>{coin.market_data.circulating_supply}</p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="content">
              <div className="about">
                <h2>About</h2>
                <p>{coin.description ? coin.description.en : ""}</p>
              </div>
            </div>
            <div className="content">
              <div className="price-history">
                <h3>Price History</h3>
                <p>
                  The chart below shows the price history of {coin.name} over
                  the last 30 days.
                </p>
                <div className="chart">
                  {loading ? (
                    <p>Loading chart...</p>
                  ) : (
                    <Line data={chartData} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
