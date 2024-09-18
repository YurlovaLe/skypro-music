import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useUserContext } from './App.context';
import { ProtectedRoute } from './components/ProtectedRoute';

import { MainPage } from './pages/MainPage';
import { Category } from './pages/Category';
import { Favorites } from './pages/Favorites';
import { Tracks } from './pages/Tracks';
import { NotFound } from './pages/NotFound';
import { AuthPage } from './pages/AuthPage';
import { RegisterPage } from './pages/RegisterPage';

export function AppRoutes() {
  const { user } = useUserContext();

  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route
        path="/*"
        element={(
          <ProtectedRoute redirectPath="/login" isAllowed={Boolean(user.id)}>
            <MainPage />
          </ProtectedRoute>
        )}
      >
        <Route
          index
          element={<Tracks />}
        />
        <Route
          path="category/:category"
          element={<Category />}
        />
        <Route
          path="favorites"
          element={<Favorites />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
}
