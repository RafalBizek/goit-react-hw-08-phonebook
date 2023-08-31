import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/actions';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();

    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.password.trim() === ''
    ) {
      return;
    }

    dispatch(register(formData)); // Przekazujemy tylko dane do akcji, nie funkcję
    setFormData({
      name: '',
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
        Username
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
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
      <button type="submit">Register</button>
    </form>
  );
};
