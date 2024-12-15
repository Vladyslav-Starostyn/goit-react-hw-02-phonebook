import styled from 'styled-components';

export const ListBtn = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
export const Btn = styled.button`
  font-size: 14px;
  display: block;
  width: 100px;
  height: 40px;
  font-weight: bold;
  margin: 20px auto;
  text-align: center;
  padding: 1px 5px;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
  background: #36426d;
  &:hover {
    background: #f2ede6;
    color: #000;
  }
`;
