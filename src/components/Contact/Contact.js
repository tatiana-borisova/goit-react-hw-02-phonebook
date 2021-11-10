import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

const Contact = ({ data, onClick }) => (
  <div className={s.contact}>
    <span className={s.name}>{data.name}:</span>
    <span className={s.number}>{data.number}</span>
    <button className={s.button} type="button" onClick={() => onClick(data.id)}>
      Delete
    </button>
  </div>
);

Contact.defaultProps = {
  name: '',
  number: '',
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
