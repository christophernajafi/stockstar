import axios from "axios";

const initialState = {
  userTransactions: []
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default transactionsReducer;
