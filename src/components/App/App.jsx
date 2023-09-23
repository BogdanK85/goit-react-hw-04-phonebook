import { Filter } from 'components/Filter/Filter';
import { Notification } from 'components/Notification/Notification';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/contactList';
import { MainTitle, SecondTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  //  [
  //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  // ]

  componentDidMount() {
    const savedDataContacts = localStorage.getItem('contacts');

    if (savedDataContacts) {
      this.setState({ contacts: JSON.parse(savedDataContacts) });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = dataContact => {
    const haveContactAlready = this.state.contacts.find(
      contact => contact.name.toLowerCase() === dataContact.name.toLowerCase()
    );

    if (haveContactAlready) {
      return alert(`${dataContact.name} is already in contacts`);
    }
    const newContact = {
      ...dataContact,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  inputFilterShift = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    // const { contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm addContact={this.addContact} />
        <SecondTitle>Contacts</SecondTitle>
        <Filter
          inputFilterShift={this.inputFilterShift}
          filter={this.state.filter}
        />
        <div>
          {this.getFilteredContacts().length > 0 ? (
            <ContactList
              contacts={filteredContacts}
              filter={this.state.filter}
              onDeleteContact={this.deleteContact}
            />
          ) : (
            <Notification message="There are no contacts in this list" />
          )}
        </div>
      </div>
    );
  }
}
