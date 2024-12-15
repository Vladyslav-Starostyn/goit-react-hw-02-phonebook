import {
  ContactItemHeader,
  ContactItemNumber,
  ContactItemButton,
} from './ContactItem.styled';

export const ContactItem = ({ name, number, onClick }) => {
  return (
    <>
      <ContactItemHeader>{name}</ContactItemHeader>
      <ContactItemNumber>{number} </ContactItemNumber>
      <ContactItemButton type="button" onClick={onClick}>
        Delete
      </ContactItemButton>
    </>
  );
};
