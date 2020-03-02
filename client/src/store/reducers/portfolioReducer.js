import axios from "axios";

const initialState = {
  userHoldings: [],
  error: null
};

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default portfolioReducer;
