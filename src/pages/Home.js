import React from 'react';
import { useAuthUser } from 'hooks/useAuthUser';

export const Home = () => {
  const { isLogged, isUser } = useAuthUser();

  const { name, email } = isUser;

  return (
    <div>
      {isLogged ? (
        <div>
          <h2>Welcome, {name}!</h2>
          <p>Your email: {email}</p>
        </div>
      ) : (
        <div>
          <h2>Welcome to the Home Page</h2>
          <p>You are not logged in.</p>
        </div>
      )}
    </div>
  );
};
