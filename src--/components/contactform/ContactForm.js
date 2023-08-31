import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/actions';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const currentUser = useSelector(state => state.user.currentUser);

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    dispatch(addContact({ name, number, userId: currentUser.id }));

    // Wyczyść pola formularza po dodaniu kontaktu
    setName('');
    setNumber('');
  };

  return (
    <form className={css.formcontact} onSubmit={handleSubmit}>
      <div>
        <label className={css.inputlabel}>
          Name:
          <input
            className={css.inputfield}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className={css.inputlabel}>
          Number:
          <input
            className={css.inputfield}
            type="text"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </label>
      </div>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
