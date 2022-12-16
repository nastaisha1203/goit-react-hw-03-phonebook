import { Component } from 'react';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Contacts, Layout, Title } from './App..styled';

const LK_CONTACTS = 'contact_list';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const curentContacts = JSON.parse(localStorage.getItem(LK_CONTACTS));
    if (curentContacts !== null) {
      this.setState({ contacts: curentContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LK_CONTACTS, JSON.stringify(this.state.contacts));
    }
  }

  addContact = values => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    const { contacts } = this.state;

    if (contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };
  filterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalize = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalize)
    );
    return (
      <Layout>
        <Title>Phonebook</Title>
        <ContactForm onFormSubmit={this.addContact} />
        <Contacts>Contacts</Contacts>

        {filterContacts.length > 0 && (
          <>
            <Filter value={filter} onChange={this.filterChange} />
            <ContactList
              filters={filterContacts}
              onDelete={this.deleteContact}
            />
          </>
        )}
      </Layout>
    );
  }
}
