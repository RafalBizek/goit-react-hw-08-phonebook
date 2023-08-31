import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthUser } from 'hooks/useAuthUser';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogged, isRefreshing } = useAuthUser();

  const redirectToLogin = !isLogged && !isRefreshing;

  return redirectToLogin ? <Navigate to={redirectTo} /> : <Component />;
};
