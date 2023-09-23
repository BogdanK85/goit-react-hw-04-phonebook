import { styled } from 'styled-components';

export const FilterStyle = styled.label`
  display: flex;
  width: 300px;
  margin-left: 50px;
  flex-direction: column;
  padding-left: 10px;
`;

export const Input = styled.input`
  width: 280px;
  height: 20px;
  margin-bottom: 30px;
  background: rgba(0, 0, 0, 0.19);
  border: none;
  outline: none;
  padding: 7px;
  font-size: 20px;
  color: #frf;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

export const FilterText = styled.p`
  font-size: 22px;
  font-weight: 500;
`;
