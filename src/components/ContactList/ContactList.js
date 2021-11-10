import React from 'react';
import Contact from '../Contact';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onClick }) => (
  <div className={s.contacts}>
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} onClick={onClick} />
        </li>
      ))}
    </ul>
  </div>
);

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
