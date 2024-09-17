import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useUserContext } from './App.context.tsx';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.tsx';

import { MainPage } from './pages/MainPage.tsx';
import { Category } from './pages/Category.tsx';
import { Favorites } from './pages/Favorites.tsx';
import { Tracks } from './pages/Tracks.tsx';
import { NotFound } from './pages/NotFound.tsx';
import { AuthPage } from './pages/AuthPage/AuthPage.tsx';
import { RegisterPage } from './pages/RegisterPage/RegisterPage.tsx';

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
