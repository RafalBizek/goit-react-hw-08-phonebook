import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthUser } from 'hooks/useAuthUser';

export const RestrictRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogged } = useAuthUser();

  return isLogged ? <Navigate to={redirectTo} /> : <Component />;
};
