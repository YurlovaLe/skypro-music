import React from 'react';
import { Navigate } from 'react-router-dom';

import { ProtectedRouteProps } from './ProtectedRoute.types.ts';

export function ProtectedRoute({ children, redirectPath, isAllowed }: ProtectedRouteProps) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}
