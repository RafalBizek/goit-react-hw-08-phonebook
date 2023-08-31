import React from 'react';
import Filters from 'components/filter/Filters';
import ContactForm from 'components/contactform/ContactForm';
import ContactList from 'components/contactlist/ContactList';
import css from './ContactManager.module.css';

export const ContactManager = () => {
  return (
    <div className={css.contactManagerContainer}>
      <h2 className={css.contactManagerHeader}>Kontakt Manager</h2>
      <Filters />
      <ContactForm />
      <ContactList />
    </div>
  );
};

// export default ContactManager;
