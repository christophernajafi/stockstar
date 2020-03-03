import axios from "axios";

const SET_TRANSACTIONS = "SET_TRANSACTIONS";

export const getTransactions = userId => async dispatch => {
  try {
    const { data } = await axios.get(`api/users/${userId}/transactions`);
    dispatch({
      type: SET_TRANSACTIONS,
      payload: data
    });
    console.log("transactions: ", data);
  } catch (err) {
    console.error(err);
  }
};

const initialState = {
  transactions: [],
  error: null
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload
      };
    default:
      return state;
  }
};

export default transactionsReducer;
