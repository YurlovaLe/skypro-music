/* eslint-disable no-shadow */
import React, {
  createContext, useContext, useMemo, useState,
} from 'react';

import type { UserContextType } from './App.types';

const UserContext = createContext<UserContextType | null>(null);

export function AppProvider({ children }: {children: JSX.Element[]}) {
  const savedUser = window.localStorage.getItem('user');
  const [user, setUser] = useState(savedUser ? JSON.parse(savedUser) : {});

  const auth = useMemo(() => (
    {
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
        const updatedUser = { ...user, access };

        window.localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
      },
    }), [user]);

  return (
    <UserContext.Provider value={auth}>
      { children }
    </UserContext.Provider>
  );
}

export function useUserContext(): UserContextType {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error('Please check what are you using useUserContext in a child of AppProvider!');
  }

  return user;
}
