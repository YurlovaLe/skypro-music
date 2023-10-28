import { AppRoutes } from "./routes";
import { createContext, useState } from 'react';
import { GlobalStyle } from "./styles";

export const UserContext = createContext(null);

export function App() {
  const savedUser = window.localStorage.getItem('user');
  const [user, setUser] = useState(savedUser ? JSON.parse(savedUser) : {});

  const auth ={
    user,
    login: (user) => {
      window.localStorage.setItem('user', JSON.stringify(user));
      window.location.href = '/';
    },
    logout: () => {
      window.localStorage.setItem('user', '');
      window.location.href = '/';
    },
    updateUser: ({ access }) => {
      const updatedUser = {...user, access};

      window.localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
  };

  return (
    <UserContext.Provider value={auth}>
      <GlobalStyle />
      <AppRoutes />
    </UserContext.Provider>
  );
}
