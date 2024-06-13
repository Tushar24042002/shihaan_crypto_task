import React, { useEffect, useState } from "react";
import styles from "./CryptoCurrencyPrice.module.css";
import axios from "axios";
import CurrencyCard from "../../Components/CurrencyCard/CurrencyCard";

const CryptoCurrencyPrice = () => {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const data = await response?.data;
        setPrices(data.bpi);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the prices:", error);
        setLoading(false);
      }
    };
    fetchPrices();
  }, []);

  if (loading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  return (
    <React.Fragment>
      <header className={styles.crypto_header}>
        <h1>Cryptocurrency Prices</h1>
      </header>
      <div className={styles.crypto_container}>
        {prices &&
          Object.keys(prices).map((currency, index) => (
            <CurrencyCard data={prices[currency]} id={index} key={index} />
          ))}
      </div>
    </React.Fragment>
  );
};

export default CryptoCurrencyPrice;
