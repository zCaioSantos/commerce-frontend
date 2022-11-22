import styled from 'styled-components';

export const ContainerInput = styled.div`
 display: flex;
 align-items: center;
`;

export const Button = styled.button`
 width: 50px;
 height: 50px;

 display: flex;
 align-items: center;
 justify-content: center;

 color: #f79f7c;
 background-color: #dbdbe4;
 border-radius: 0.3125rem;

 font-size: 25px;

 transition: all 0.3s ease;
 &:hover {
  cursor: pointer;
  background-color: #464646;
 }

 &:disabled {
  opacity: 0.5;
  cursor: not-allowed;
 }
`;

export const Input = styled.input`
 max-height: 3.375rem;
 font-size: 20px;
 max-width: 150px;
 padding: 16px;
 background-color: transparent;
 outline: none;
 text-align: center;
 &::placeholder {
  text-align: center;
 }

 &::-webkit-inner-spin-button,
 &::-webkit-outer-spin-button {
  display: none;
  margin: 0;
 }
`;
