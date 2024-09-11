import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useUserContext } from './App.context.tsx';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.tsx';

import { MainPage } from './pages/MainPage.tsx';
import { AuthPage } from './pages/AuthPage.tsx';
import { Category } from './pages/Category.tsx';
import { Favorites } from './pages/Favorites.tsx';
import { Tracks } from './pages/Tracks.tsx';
import { NotFound } from './pages/NotFound.tsx';

export function AppRoutes() {
  const { user } = useUserContext();

  return (
    <Routes>
      <Route path="/login" element={<AuthPage isLoginMode />} />
      <Route path="/register" element={<AuthPage isLoginMode={false} />} />
      <Route
        path="/"
        element={(
          <ProtectedRoute redirectPath="/login" isAllowed={Boolean(user.id)}>
            <MainPage />
          </ProtectedRoute>
        )}
      >
        <Route
          path="/"
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
