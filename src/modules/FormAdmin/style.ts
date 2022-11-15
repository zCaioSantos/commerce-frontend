import styled from 'styled-components';

export const ContainerForm = styled.form`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 1rem;

 .toggle {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 1.5rem;
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

 /* &.enable {
  background: #464646;
  color: white;
 } */
`;
