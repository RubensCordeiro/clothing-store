import { createContext, useState } from "react";

const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export { userContext, UserProvider };
