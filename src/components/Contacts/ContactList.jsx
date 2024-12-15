import { PropTypes } from 'prop-types';
import { ContactItem } from '../contactItem/ContactItem';
import { ContactListEl, ContactListItem } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListEl>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem key={id}>
          <ContactItem
            name={name}
            number={number}
            onClick={() => deleteContact(id)}
          />
        </ContactListItem>
      ))}
    </ContactListEl>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
