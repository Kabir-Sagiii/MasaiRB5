import { createContext, useState } from "react";

export const AuthContext = createContext();

function CustomProviderComp({ children }) {
  const [isloggedin, setIsLoggedIn] = useState(false);
  const [isadmin, setIsAdmin] = useState(false);

  const changeStatusOfAdmin = () => {
    setIsAdmin(true);
  };
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
    if (isadmin) {
      setIsAdmin(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{ isloggedin, isadmin, changeStatusOfAdmin, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default CustomProviderComp;
