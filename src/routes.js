import { useContext } from 'react';
import { Routes, Route } from "react-router-dom";

import { UserContext } from "./App";
import { ProtectedRoute } from "./components/ProtectedRoute";

import MainPage from "./pages/MainPage";
import { AuthPage } from "./pages/AuthPage";
import { Category } from "./pages/Category";
import { Favorites } from "./pages/Favorites";
import { Tracks } from "./pages/Tracks";
import { NotFound } from "./pages/NotFound";

export const AppRoutes = () => {
  const { user } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage isLoginMode={false} />} />
      <Route
        path="/"
        element={
          <ProtectedRoute redirectPath="/login" isAllowed={Boolean(user.id)}>
            <MainPage user={user}/>
          </ProtectedRoute>
        }
      >
        <Route
          path="/"
          element={ <Tracks /> }
        />
        <Route
          path="category/:category"
          element={ <Category /> }
        />
        <Route
          path="favorites"
          element={ <Favorites /> }
        />
        <Route
          path="*"
          element={ <NotFound /> }
        />
      </Route>
    </Routes>
  );
};
