import React, { Component, Fragment } from "react";
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
class Portfolio extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      userHoldings: [],
      userTransactions: [],
      userCashBalance: 5000,
      error: null,
      canUpdatePrices: true // set to true to indicate when it's ok to grab updated price data
    };
  }

  componentDidMount = async () => {
    const { userId } = this.context;
    this.setState({ canUpdatePrices: false });

    try {
      console.log("context", this.context);
      const userHoldings = await this.fetchUserHoldings(userId);
      const userTransactions = await this.fetchUserTransactions(userId);
      const userCashBalance = await this.fetchUserCashBalance(userId);
      this.setState(
        {
          userHoldings,
          userTransactions,
          userCashBalance,
          canUpdatePrices: true
        },
        () => {
          this.setTimer();
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  fetchUpdatedStockPrices = async () => {
    const updatedHoldings = await this.appendCurrentPrice(
      this.state.userHoldings
    );
    this.setState({
      userHoldings: updatedHoldings
    });
  };

  fetchUserCashBalance = async userId => {
    const response = await axios.get(`/api/users/${this.context.userId}`);
    return Number(response.data.user.user.balance);
  };

  fetchUserHoldings = async userId => {
    const response = await axios.get(`api/users/${userId}/holdings`);
    return await this.appendCurrentPrice(response.data);
  };

  fetchUserTransactions = async userId => {
    try {
      const response = await axios.get(`api/users/${userId}/transactions`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  handleNewTransaction = async (ticker, quantity, transactionType) => {
    const { userId } = this.context;
    this.setState({
      error: null,
      canUpdatePrices: false
    });

    try {
      await axios.post(`api/users/${userId}/transactions`, {
        ticker,
        quantity,
        transactionType
      });
      const userHoldings = await this.fetchUserHoldings(userId);
      const userTransactions = await this.fetchUserTransactions(userId);
      const userCashBalance = await this.fetchUserCashBalance(userId);
      this.setState(
        {
          userHoldings,
          userTransactions,
          userCashBalance,
          canUpdatePrices: true
        },
        () => {
          this.setTimer();
        }
      );
    } catch (error) {
      this.setState({
        error
      });
    }
  };

  // set a timer to continuously grab up to date stock price
  setTimer = () => {
    const { isAuth } = this.context;
    const timer = setIntervalAsync(async () => {
      if (
        !this.state.canUpdatePrices ||
        this.state.userHoldings.length < 1 ||
        !isAuth
      ) {
        clearIntervalAsync(timer);
      }
      await this.fetchUpdatedStockPrices();
    }, 5000);
  };

  fetchUpdatedStockPrices = async () => {
    const updatedHoldings = await this.appendCurrentPrice(
      this.state.userHoldings
    );
    this.setState({
      userHoldings: updatedHoldings
    });
  };

  fetchUserCashBalance = async userId => {
    const response = await axios.get(`/api/users/${userId}`);
    return Number(response.data.user.user.balance);
  };

  fetchUserHoldings = async userId => {
    const response = await axios.get(`api/users/${userId}/holdings`);
    return await this.appendCurrentPrice(response.data);
  };

  fetchUserTransactions = async userId => {
    try {
      const response = await axios.get(`api/users/${userId}/transactions`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  fetchStockPriceInfo = async ticker => {
    const response = await axios.get(`api/prices/${ticker}`);
    const openPrice = response.data.open;
    const currentPrice = response.data.latestPrice;
    return { openPrice, currentPrice };
  };

  appendCurrentPrice = async assets => {
    // for each stock in the user's portfolio, add on the current stock price
    const pricedAssets = assets.map(async asset => {
      const { openPrice, currentPrice } = await this.fetchStockPriceInfo(
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

  calculateTotalValue = assets => {
    return assets.reduce((totalValue, asset) => {
      return totalValue + asset.currentValue;
    }, 0);
  };

  render() {
    const { classes, location } = this.props;
    const totalValue = this.calculateTotalValue(this.state.userHoldings);

    console.log("userholdings: ", this.state.userHoldings);

    return (
      <Fragment>
        <div className="portfolio-frame">
          <div className="portfolio-box">
            <PortfolioHoldings
              userHoldings={this.state.userHoldings}
              totalValue={totalValue}
            />
          </div>
          <div className="trade-box">
            <TradeForm
              userCashBalance={this.state.userCashBalance}
              onSubmit={this.handleNewTransaction}
              error={this.state.error}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Portfolio;
