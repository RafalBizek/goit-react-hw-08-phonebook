import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFiltersContacts } from 'redux/selectors';
import { Contact } from 'redux/contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const filterContacts = useSelector(selectFiltersContacts);
  const [searchText] = useState('');

  const filteredContacts = filterContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={css.contactListContainer}>
      {/* ... Pozostały kod */}
      <div className={css.scrollableList}>
        <ul className={css.contactList}>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ContactList;
