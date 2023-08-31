import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo, logoutUser } from 'redux/userActions'; // Dodaj importy akcji
import { selectCurrentUser, setCurrentUser } from 'redux/userSlice';
import css from './UserProfileForm.module.css'; // Załóżmy, że używasz styli z osobnego pliku

export const UserProfileForm = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const [newUsername, setNewUsername] = useState(currentUser.username);
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');

  const handleProfileUpdate = async event => {
    event.preventDefault();

    try {
      // Wywołaj akcję aktualizacji profilu z wykorzystaniem createAsyncThunk
      const updatedUser = await dispatch(
        updateUserInfo({
          id: currentUser.id,
          newUsername,
          newPassword,
        })
      );

      // Zaktualizuj informacje o użytkowniku w stanie Redux
      dispatch(setCurrentUser(updatedUser));
      setError('');
    } catch (error) {
      setError('Błąd aktualizacji profilu');
    }
  };

  const handleLogout = async () => {
    try {
      // Wywołaj akcję wylogowania
      await dispatch(logoutUser());
      setError('');
    } catch (error) {
      setError('Błąd wylogowania');
    }
  };

  return (
    <form
      className={css.userProfileFormContainer}
      onSubmit={handleProfileUpdate}
    >
      <h2 className={css.userProfileFormHeader}>Aktualizacja profilu</h2>
      <input
        className={css.userProfileFormInput}
        type="text"
        placeholder="Nowa nazwa użytkownika"
        value={newUsername}
        onChange={e => setNewUsername(e.target.value)}
      />
      <input
        className={css.userProfileFormInput}
        type="password"
        placeholder="Nowe hasło"
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
      />
      <button className={css.userProfileFormButton} type="submit">
        Zaktualizuj profil
      </button>
      <button
        className={css.userProfileFormButton}
        type="button"
        onClick={handleLogout}
      >
        Wyloguj się
      </button>
      {error && <p className={css.userProfileFormError}>{error}</p>}
    </form>
  );
};
