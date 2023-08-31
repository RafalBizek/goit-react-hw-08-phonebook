import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/actions';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();

    if (formData.email.trim() === '' || formData.password.trim() === '') {
      return; // Dodaj odpowiednie walidacje
    }

    dispatch(logIn(formData));
    setFormData({
      email: '',
      password: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
      }}
    >
      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
