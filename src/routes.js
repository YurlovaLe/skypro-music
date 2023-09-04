import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Category } from "./pages/Category";
import { Favorites } from "./pages/Favorites";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { NotFound } from "./pages/NotFound";

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/"
        element={
          <ProtectedRoute redirectPath="/login" isAllowed={Boolean(user)}>
            <MainPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="category/:category"
        element={
          <ProtectedRoute redirectPath="/login" isAllowed={Boolean(user)}>
            <Category />
          </ProtectedRoute>
        }
      />
      <Route
        path="favorites"
        element={
          <ProtectedRoute redirectPath="/login" isAllowed={Boolean(user)}>
            <Favorites />
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={
          <ProtectedRoute redirectPath="/login" isAllowed={Boolean(user)}>
            <NotFound />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
