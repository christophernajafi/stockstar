import axios from "axios";

// register

// log in

// log out

const initialState = {
  isAuth: false,
  userId: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
