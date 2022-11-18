import styled from 'styled-components';

export const ContainerForm = styled.form`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 1rem;

 strong {
  width: 100%;
  text-align: left;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  padding-left: 0.25rem;
 }
`;

export const ContainerFlex = styled.div`
 width: 100%;
 display: flex;
 gap: 1rem;
`;

export const InputRadio = styled.input`
 display: none;
`;

export const RadioButton = styled.label`
 flex: 1;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 16px 24px;
 width: 100%;
 height: 58px;
 border-radius: 6px;
 font-weight: 300;
 background: #ebebeb;
 color: #7c7c8a;

 transition: background 0.3s ease;
 &:hover,
 &:active {
  cursor: pointer;
  background: #464646;
  color: white;
 }

 &:has(${InputRadio}:checked) {
  background: #464646;
  color: white;
 }
`;

export const InputFileContainer = styled.div`
 width: 100%;
 padding: 16px;

 display: flex;
 justify-content: center;
 align-items: center;

 background: #ebebeb;
 border-radius: 6px;

 > label {
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #7c7c8a;

  > input {
   display: none;
  }
 }
`;
