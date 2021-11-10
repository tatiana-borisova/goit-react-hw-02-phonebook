import React, { Component } from 'react';
import Section from './components/Section';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmitHandler = data => {
    const isNameHere = this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase(),
    );

    const isNumberHere = this.state.contacts.find(
      contact => contact.number.toLowerCase() === data.number.toLowerCase(),
    );

    isNameHere || isNumberHere
      ? alert(
          `${isNameHere ? data.name : ''} ${
            isNumberHere ? data.number : ''
          } is already in contacts`,
        )
      : this.setState(({ contacts }) => ({ contacts: [data, ...contacts] }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <Section title="Phonebook">
          <Form onSubmit={this.onSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.onChangeFilter} />
          <ContactList
            contacts={visibleContacts}
            onClick={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
