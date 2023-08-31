// RegistrationForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from 'redux/userSlice';
import { loginUser } from 'redux/userActions';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async event => {
    event.preventDefault();

    try {
      // Wywołaj akcję rejestracji z wykorzystaniem createAsyncThunk

      const newUser = await dispatch(loginUser({ username, password }));

      // Po udanej rejestracji, ustaw aktualnego użytkownika w stanie Redux
      dispatch(setCurrentUser(newUser));
    } catch (error) {
      console.error('Błąd rejestracji:', error.message);
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      <h2>Rejestracja</h2>
      <div>
        <label>
          Nazwa użytkownika:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Hasło:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Zarejestruj się</button>
    </form>
  );
};
