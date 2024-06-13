import React from "react";
import he from "he";
import styles from "./CurrencyCard.module.css";

const CurrencyCard = ({ data, id }) => {
  return (
    <div key={id} className={styles.crypto_card}>
      <h2>{data?.description}</h2>
      <p>
        <span>{he?.decode(data?.symbol)}</span>
        {data?.rate}
      </p>
    </div>
  );
};

export default CurrencyCard;
