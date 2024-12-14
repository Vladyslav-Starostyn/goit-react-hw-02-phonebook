import { PropTypes } from 'prop-types';
import {
  ContactListEl,
  ContactListItem,
  ContactItemHeader,
  ContactItemNumber,
  ContactItemButton,
} from 'components/Contacts/ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListEl>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactListItem key={id}>
            <ContactItemHeader>{name}</ContactItemHeader>
            <ContactItemNumber>{number}</ContactItemNumber>
            <ContactItemButton type="button" onClick={() => deleteContact(id)}>
              Delete
            </ContactItemButton>
          </ContactListItem>
        );
      })}
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
