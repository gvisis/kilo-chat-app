import { useState } from "react";
import { validateEmail } from "../../js/validateEmail";

const mainUserLogin = "demo@demo.com";
const mainUserPassword = "demo";

const Authentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(null);

  const handleLogin = (email, password) => {
    if (
      validateEmail(email) &&
      mainUserLogin === email &&
      password.length > 0 &&
      mainUserPassword === password
    ) {
      setIsLoggedIn(true);
      setIsError(null);
      return true;
    } else {
      setIsLoggedIn(false);
      setIsError("Wrong email or password");
      return false;
    }
  };

  return { handleLogin, isError, isLoggedIn };
};

export default Authentication;
