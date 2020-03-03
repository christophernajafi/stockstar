import axios from "axios";

const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAIL = "REGISTER_FAIL";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT = "LOGOUT";

// register
export const register = registrationData => async dispatch => {
  try {
    await axios.post("api/users/", registrationData);
    await authorize();
    // dispatch({
    //   type: REGISTER_SUCCESS
    // });
  } catch (err) {
    console.log(err.message);
  }
};

// log in
export const authorize = async dispatch => {
  try {
    const user = await axios.get("/api/auth/me");
    dispatch({
      type: LOGIN_SUCCESS,
      payload: Number(user.data.user)
    });
  } catch (err) {
    console.log(err.message);
  }
};

// log out
export const logout = async dispatch => {
  try {
    dispatch({
      type: LOGOUT
    });
    await axios.post("/api/users/logout");
  } catch (err) {
    console.log(err.message);
  }
};

const initialState = {
  isAuth: false,
  userId: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userId: payload
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        userId: null
      };
    default:
      return state;
  }
};

export default authReducer;
