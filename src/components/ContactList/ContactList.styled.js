import { styled } from 'styled-components';

export const ContactListStyle = styled.ul`
  display: flex;
  width: 400px;
  flex-wrap: wrap;
  margin-top: 10px;
  padding: 1px 50px;
  border-radius: 8px;
  background-color: #fff;
  position: relative;
`;

export const ContactListItem = styled.li`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  padding: 0;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  font-weight: 600;

  &:first-child {
    justify-content: flex-start;
    padding-left: 15px;
    gap: 120px;
  }
`;
export const ContactItemText = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const DeleteBtn = styled.button`
  width: 65px;
  padding: 4px;
  font-size: 14px;
  font-weight: 500;
  background: rgba(223, 125, 125, 0.5);
  color: #801919;
  cursor: pointer;
  border-radius: 7px;
  border: #0004ff;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: rgba(223, 125, 125, 0.8);
    color: white;
  }

  &:focus {
    outline: none;
  }
`;
