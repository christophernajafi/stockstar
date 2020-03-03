import axios from "axios";

const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAIL = "REGISTER_FAIL";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT = "LOGOUT";

export const loginSuccess = userId => ({
  type: LOGIN_SUCCESS,
  payload: userId
});

export const register = async registrationData => {
  try {
    console.log("Register!!!");
    await axios.post("api/users/", registrationData);
    await authorize();
    // dispatch({
    //   type: REGISTER_SUCCESS
    // });
  } catch (err) {
    console.log(err.message);
  }
};

export const login = async loginData => {
  try {
    console.log("login!!!");
    await axios.post("api/users/login/", loginData);
    await authorize();
  } catch (err) {
    console.log(err.message);
  }
};

export const authorize = () => async dispatch => {
  try {
    console.log("Authorize!!!");
    const user = await axios.get("/api/auth/me");
    console.log("user: ", user);
    const userId = Number(user.data.user);
    dispatch(loginSuccess(userId));
    loginSuccess(userId);
  } catch (err) {
    console.log(err.message);
  }
};

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

  console.log("action: ", action);

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
