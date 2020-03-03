import axios from "axios";

const SET_HOLDINGS = "SET_HOLDINGS";

export const getHoldings = userId => async dispatch => {
  try {
    const { data } = await axios.get(`api/users/${userId}/holdings`);
    dispatch({
      type: SET_HOLDINGS,
      payload: data
    });
  } catch (err) {
    console.log(err.message);
  }
  // return await this.appendCurrentPrice(response.data);
};

const initialState = {
  holdings: [],
  error: null
};

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOLDINGS:
      return {
        ...state,
        holdings: action.payload
      };
    default:
      return state;
  }
};

export default portfolioReducer;
