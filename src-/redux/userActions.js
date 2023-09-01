import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCurrentUser } from './userSlice';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'; // Nowy URL API

export const loginUser = createAsyncThunk(
  'user/LOGIN_USER',
  async ({ username, password }, thunkAPI) => {
    try {
      // Tutaj wykonaj żądanie do serwera w celu zalogowania użytkownika
      const response = await axios.post('/users/login', {
        username,
        password,
      });

      // Sprawdź, czy otrzymana odpowiedź jest poprawna
      if (response.status === 200) {
        const loggedInUser = response.data;
        return loggedInUser;
      } else {
        throw new Error('Błąd logowania');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'user/UPDATE_USER_INFO',
  async ({ id, newUsername, newPassword }, thunkAPI) => {
    try {
      // W rzeczywistym przypadku musisz wywołać API lub inną funkcję do aktualizacji danych użytkownika
      // Tutaj zakładam prostą aktualizację danych poprzez API, używając axios
      const response = await axios.put(`/users/${id}`, {
        username: newUsername,
        password: newPassword,
      });

      // Sprawdź, czy otrzymana odpowiedź jest poprawna
      if (response.status === 200) {
        const updatedUser = response.data;
        // Zaktualizuj użytkownika w stanie Redux
        thunkAPI.dispatch(setCurrentUser(updatedUser));
        return updatedUser;
      } else {
        throw new Error('Błąd aktualizacji danych użytkownika');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/LOGOUT_USER',
  async (_, thunkAPI) => {
    try {
      // Wywołaj endpoint do wylogowania
      await axios.post('/users/logout');
      // Wyczyść bieżącego użytkownika w stanie Redux
      thunkAPI.dispatch(setCurrentUser(null));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
