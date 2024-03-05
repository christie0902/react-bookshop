import React, { useState, useEffect, useContext } from "react";
import CurrencyContext from "./CurrencyContext";
import Context from "./Context";
import { useReducer } from "react";

const CurrencySelection = () => {
  // const [currency, setCurrency] = useState(
  //   localStorage.getItem("currency") || "eur"
  // );
  const [currencies, setCurrencies] = useState([]);
  // const [exchangeRate, setExchangeRate] = useState(1);
  const {
    state: { currency, exchangeRate },
    dispatch,
  } = useContext(Context);
  // const { currency, setCurrency } = useContext(CurrencyContext);

  const handleChange = (e) => {
    // setCurrency(e.target.value);
    dispatch({
      type: "currency/set",
      payload: e.target.value,
    });
  };

  const loadExchangeRate = async (currency) => {
    const response = await fetch(
      `https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency=${currency}`
    );
    const data = await response.json();
    const rate = data.rate;
    dispatch({
      type: "exchangeRate/set",
      payload: data.rate,
    });
  };

  const loadCurrencies = async () => {
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php"
    );
    const data = await response.json();
    setCurrencies(data);
  };

  useEffect(() => {
    localStorage.setItem("currency", currency);
    loadExchangeRate(currency);
  }, [currency]);

  useEffect(() => {
    loadCurrencies();
  }, []);

  return (
    <>
      <select
        name="currency"
        id="currency"
        value={currency}
        onChange={handleChange}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <p style={{ fontSize: 20 }}>
        Exchange rate (to {currency}): {exchangeRate}
      </p>
    </>
  );
};

export default CurrencySelection;
