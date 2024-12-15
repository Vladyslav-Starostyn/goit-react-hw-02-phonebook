import styled from 'styled-components';

export const ContactItemHeader = styled.h2`
  margin: 0;
  margin-bottom: auto;
`;

export const ContactItemNumber = styled.p`
  margin: 3px;
  font-weight: 600;
  font-size: 24px;
  color: var(--first-brand-color);
`;

export const ContactItemButton = styled.button`
  width: 100px;
  background-color: var(--second-brand-color);
  border: 2px solid var(--second-brand-color);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #c4c4c4;
  cursor: pointer;
  margin-top: auto;
  padding: 3px;
  &:hover {
    border: 2px solid var(--first-brand-color);
    box-shadow: -6px 16px 11px -9px rgba(31, 25, 25, 0.75);
  }
`;
