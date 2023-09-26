import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { UserContext } from "./App";
import { AuthPage } from "./pages/AuthPage";
import { Category } from "./pages/Category";
import { Favorites } from "./pages/Favorites";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { NotFound } from "./pages/NotFound";
import { useContext } from 'react';

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
      />
      <Route
        path="category/:category"
        element={
          <ProtectedRoute redirectPath="/login" isAllowed={Boolean(user.id)}>
            <Category />
          </ProtectedRoute>
        }
      />
      <Route
        path="favorites"
        element={
          <ProtectedRoute redirectPath="/login" isAllowed={Boolean(user.id)}>
            <Favorites />
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={
          <ProtectedRoute redirectPath="/login" isAllowed={Boolean(user.id)}>
            <NotFound />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
