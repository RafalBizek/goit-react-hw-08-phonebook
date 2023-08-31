// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUser } from 'redux/userActions';
// import { setCurrentUser } from 'redux/userSlice';
// import axios from 'axios';
// import css from './LoginForm.module.css';

// export const LoginForm = () => {
//   const dispatch = useDispatch();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async event => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('/users/login', {
//         username,
//         password,
//       });

//       if (response.status === 200) {
//         const { token } = response.data;
//         localStorage.setItem('token', token);
//         const currentUser = await dispatch(loginUser(token));
//         dispatch(setCurrentUser(currentUser));
//         setError('');
//       } else {
//         throw new Error('Invalid response');
//       }
//     } catch (error) {
//       setError('Błąd logowania');
//     }
//   };

//   return (
//     <form className={css.loginFormContainer} onSubmit={handleLogin}>
//       <h2 className={css.loginFormHeader}>Logowanie</h2>
//       <input
//         className={css.loginFormInput}
//         type="text"
//         placeholder="Nazwa użytkownika"
//         value={username}
//         onChange={e => setUsername(e.target.value)}
//       />
//       <input
//         className={css.loginFormInput}
//         type="password"
//         placeholder="Hasło"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       />
//       <button className={css.loginFormButton} type="submit">
//         Zaloguj się
//       </button>
//       {error && <p className={css.loginFormError}>{error}</p>}
//     </form>
//   );
// };
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/userActions';
import { setCurrentUser } from 'redux/userSlice';
import css from './LoginForm.module.css'; // Importuj style

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async event => {
    event.preventDefault();

    try {
      // Wywołaj akcję logowania z wykorzystaniem createAsyncThunk
      const newUser = await dispatch(loginUser({ username, password }));

      // Zresetuj pola po zalogowaniu
      setUsername('');
      setPassword('');
      setError('');

      // Ustaw aktualnego użytkownika w stanie Redux
      dispatch(setCurrentUser(newUser));
    } catch (error) {
      setError('Błąd logowania');
    }
  };

  return (
    <form className={css.loginFormContainer} onSubmit={handleLogin}>
      <h2 className={css.loginFormHeader}>Logowanie</h2>
      <input
        className={css.loginFormInput}
        type="text"
        placeholder="Nazwa użytkownika"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        className={css.loginFormInput}
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className={css.loginFormButton} type="submit">
        Zaloguj się
      </button>
      {error && <p className={css.loginFormError}>{error}</p>}
    </form>
  );
};
