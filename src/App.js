import { AppRoutes } from "./routes";
import { createContext } from 'react';
import { GlobalStyle } from "./styles";

export const UserContext = createContext(null);

export function App() {
  const savedUser = window.localStorage.getItem('user');
  const auth ={
    user: savedUser ? JSON.parse(savedUser) : {},
    login: (user) => {
      window.localStorage.setItem('user', JSON.stringify(user));
      window.location.href = '/';
    },
    logout: () => {
      window.localStorage.setItem('user', '');
      window.location.href = '/';
    }
  };

  return (
    <UserContext.Provider value={auth}>
      <GlobalStyle />
      <AppRoutes />
    </UserContext.Provider>
  );
}
