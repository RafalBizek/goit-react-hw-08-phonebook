import React from 'react';
import { useSelector } from 'react-redux';
import { selectContactsItems } from 'redux/selectors';
import { ContactList } from 'components/contactlist/ContactList';

export const ContactsPage = () => {
  const contacts = useSelector(selectContactsItems);

  return (
    <div>
      <h2>Contact Page</h2>
      <ContactList contacts={contacts} />
    </div>
  );
};
