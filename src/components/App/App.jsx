import { useEffect, useState } from 'react';
import { Filter } from 'components/Filter/Filter';
import { Notification } from 'components/Notification/Notification';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/contactList';
import { MainTitle, SecondTitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = dataContact => {
    const haveContactAlready = contacts.some(
      contact => contact.name.toLowerCase() === dataContact.name.toLowerCase()
    );

    if (haveContactAlready) {
      return alert(`${dataContact.name} is already in contacts`);
    }
    const newContact = {
      ...dataContact,
      id: nanoid(),
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const inputFilterShift = ({ target: { value } }) => {
    setFilter(value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm addContact={addContact} />
      <SecondTitle>Contacts</SecondTitle>
      <Filter inputFilterShift={inputFilterShift} filter={filter} />
      <div>
        {filteredContacts.length > 0 ? (
          <ContactList
            contacts={filteredContacts}
            filter={filter}
            onDeleteContact={deleteContact}
          />
        ) : (
          <Notification message="There are no contacts in this list" />
        )}
      </div>
    </div>
  );
};
