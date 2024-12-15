import { ContactItemNumber, ContactItemButton } from './ContactItem.styled';

export const ContactItem = ({ name, number, onClick }) => {
  return (
    <>
      <h2>{name}</h2>
      <ContactItemNumber>{number} </ContactItemNumber>
      <ContactItemButton type="button" onClick={onClick}>
        Delete
      </ContactItemButton>
    </>
  );
};
