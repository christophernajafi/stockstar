import React, { Fragment, useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  setIntervalAsync,
  clearIntervalAsync
} from "set-interval-async/dynamic";

import "./portfolio.css";
import PortfolioHoldings from "../portfolio-holdings/PortfolioHoldings";
import TradeForm from "../trade-form/TradeForm";
import AuthContext from "../../context/AuthContext";

// parent component of PortfolioHoldings and TradeForm
const Portfolio = props => {
  const authContext = useContext(AuthContext);
  const { userId, isAuth } = authContext;

  const [portfolioState, setPortfolioState] = useState({
    userHoldings: [],
    userTransactions: [],
    userCashBalance: 5000,
    error: null,
    canUpdatePrices: true // set to true to indicate when it's ok to grab updated price data
  });

  const {
    userHoldings,
    userCashBalance,
    error,
    canUpdatePrices
  } = portfolioState;

  useEffect(() => {
    getPortfolio(userId);
    // eslint-disable-next-line
  }, [userId]);

  const getPortfolio = async userId => {
    setPortfolioState({
      ...portfolioState,
      canUpdatePrices: false
    });

    try {
      const userHoldings = await fetchUserHoldings(userId);
      const userTransactions = await fetchUserTransactions(userId);
      const userCashBalance = await fetchUserCashBalance(userId);
      setPortfolioState(
        {
          ...portfolioState,
          userHoldings,
          userTransactions,
          userCashBalance,
          canUpdatePrices: true
        },
        () => {
          setTimer();
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  const fetchUpdatedStockPrices = async () => {
    const updatedHoldings = await appendCurrentPrice(userHoldings);
    setPortfolioState({
      ...portfolioState,
      userHoldings: updatedHoldings
    });
  };

  const fetchUserCashBalance = async userId => {
    const response = await axios.get(`/api/users/${userId}`);
    return Number(response.data.user.user.balance);
  };

  const fetchUserHoldings = async userId => {
    const response = await axios.get(`api/users/${userId}/holdings`);
    return await appendCurrentPrice(response.data);
  };

  const fetchUserTransactions = async userId => {
    try {
      const response = await axios.get(`api/users/${userId}/transactions`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  const handleNewTransaction = async (ticker, quantity, transactionType) => {
    setPortfolioState({
      ...portfolioState,
      error: null,
      canUpdatePrices: false
    });

    try {
      await axios.post(`api/users/${userId}/transactions`, {
        ticker,
        quantity,
        transactionType
      });
      const userHoldings = await fetchUserHoldings(userId);
      const userTransactions = await fetchUserTransactions(userId);
      const userCashBalance = await fetchUserCashBalance(userId);
      setPortfolioState(
        {
          ...portfolioState,
          userHoldings,
          userTransactions,
          userCashBalance,
          canUpdatePrices: true
        },
        () => {
          setTimer();
        }
      );
    } catch (error) {
      setPortfolioState({
        ...portfolioState,
        error
      });
      setTimeout(() => {
        setPortfolioState({
          ...portfolioState,
          error: null
        });
      }, 3000);
    }
  };

  // set a timer to continuously grab up to date stock price
  const setTimer = () => {
    const timer = setIntervalAsync(async () => {
      if (!canUpdatePrices || userHoldings.length < 1 || !isAuth) {
        clearIntervalAsync(timer);
      }
      await fetchUpdatedStockPrices();
    }, 5000);
  };

  const fetchStockPriceInfo = async ticker => {
    const response = await axios.get(`api/prices/${ticker}`);
    const openPrice = response.data.open;
    const currentPrice = response.data.latestPrice;
    return { openPrice, currentPrice };
  };

  const appendCurrentPrice = async assets => {
    // for each stock in the user's portfolio, add on the current stock price
    const pricedAssets = assets.map(async asset => {
      const { openPrice, currentPrice } = await fetchStockPriceInfo(
        asset.ticker
      );
      const currentValue = currentPrice * asset.quantity;
      let color = "grey"; // change color if current price > or < or === open price
      if (currentPrice < openPrice) color = "red";
      else if (currentPrice > openPrice) color = "green";
      return { ...asset, currentValue, color };
    });
    return await Promise.all(pricedAssets);
  };

  const calculateTotalValue = assets => {
    return assets.reduce((totalValue, asset) => {
      return totalValue + asset.currentValue;
    }, 0);
  };

  const totalValue = calculateTotalValue(userHoldings);

  return (
    <Fragment>
      <div className="portfolio-frame">
        <PortfolioHoldings
          userHoldings={userHoldings}
          totalValue={totalValue}
        />
        <div className="trade-box">
          <TradeForm
            userCashBalance={userCashBalance}
            onSubmit={handleNewTransaction}
            error={error}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
