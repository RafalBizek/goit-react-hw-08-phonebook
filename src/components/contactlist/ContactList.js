import React, { useState } from 'react';
import { Contact } from 'redux/contact';
import { useDispatch } from 'react-redux';
import { toggleFavorite, deleteContact } from 'redux/actions';

export const ContactList = ({ contacts }) => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch(); // Add this line to use useDispatch()

  if (!contacts) {
    return <div>Loading...</div>;
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Define your handlers for toggle and delete
  const handleToggleFavorite = contactId => {
    dispatch(toggleFavorite({ id: contactId }));
  };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className="contactListContainer">
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search for a contact..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>
      <div className="scrollableList">
        <ul className="contactList">
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <Contact
                contact={contact}
                toggleFavorite={() => handleToggleFavorite(contact.id)}
                deleteContact={() => handleDelete(contact.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
