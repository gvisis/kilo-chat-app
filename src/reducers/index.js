import { IS_LOGGED, HANDLE_LOGIN, LOADING } from "../actions";
import { validateEmail } from "../js/validateEmail";

const initialStore = {
  isLoggedIn: false,
  isError: null,
  isLoading: true,
};

export const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case IS_LOGGED:
      return { ...state, isLoggedIn: action.payload };
    case HANDLE_LOGIN:
      const mainUserLogin = "demo@demo.com";
      const mainUserPassword = "demo";

      const { userEmail, userPassword } = action.payload;

      if (
        validateEmail(userEmail) &&
        mainUserLogin === userEmail &&
        userPassword.length > 0 &&
        mainUserPassword === userPassword
      ) {
        // return console.log(state.isLoggedIn);
        return { ...state, isLoggedIn: true, isError: null };
      } else {
        // return console.log(state.isLoggedIn);
        return {
          ...state,
          isLoggedIn: false,
          isError: "Wrong email or password",
        };
      }
    case LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
