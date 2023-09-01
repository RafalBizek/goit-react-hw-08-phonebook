import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/userSlice';
import { LoginForm } from 'components/loginform/LoginForm';
import { RegistrationForm } from 'components/registrationform/RegistrationForm';
import { ContactManager } from 'components/contactmanager/ContactManager';
import { UserProfileForm } from 'components/userprofileform/UserProfileForm';

export const App = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div>
      <h1>Phonebook</h1>
      {currentUser ? (
        <>
          <h2>Witaj, {currentUser.username}!</h2>
          <UserProfileForm />
          <ContactManager />
        </>
      ) : (
        <>
          <LoginForm />
          <RegistrationForm />
        </>
      )}
    </div>
  );
};
