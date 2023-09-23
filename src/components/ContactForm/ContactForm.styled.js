import { styled } from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  width: 400px;
  height: 250px;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 15px;
  margin-left: 50px;
  outline: 1px solid #000000;
`;
export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;

  margin: 7px 15px;
  font-size: 22px;
  font-weight: 600;
`;
export const Input = styled.input`
  display: flex;
  width: 280px;
  height: 20px;
  font-size: 20px;
  font-weight: 500;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
  margin-top: 10px;
  /* margin-left: 5px; */
  padding: 7px;
  margin-left: 1px;
  background: rgba(0, 0, 0, 0.19);
  border: 1px solid rgba(46, 45, 45, 0.3);
  border-radius: 5px;
  outline: none;
`;
export const ButtonAddContact = styled.button`
  font-size: 16px;
  font-weight: 500;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  width: 150px;
  height: 35px;
  text-align: center;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: rgb(190, 255, 233);
  color: rgb(41, 18, 18);
  margin-left: 15px;
  margin-bottom: 5px;
  &: hover {
    background: rgba(223, 125, 125, 0.8);
    color: white;
  }
`;
