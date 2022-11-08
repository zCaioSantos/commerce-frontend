import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 gap: 1rem;
`;

export const ContainerInput = styled.div`
 display: flex;
 align-items: center;
 justify-content: flex-start;
 padding: 1rem;
 gap: 0.75rem;

 width: 100%;
 max-height: 3.375rem;

 color: #7c7c8a;

 background-color: #ebebeb;
 border-radius: 0.375rem;

 input {
  flex: 1;
  background: transparent;

  &::placeholder {
   color: #7c7c8a;
  }
 }
`;

export const Button = styled.button`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 0.75rem;
 padding: 1rem;

 max-height: 3.375rem;

 background-color: transparent;
 border: 1px solid #464646;
 border-radius: 6px;

 color: #464646;
 font-weight: 700;

 transition: background-color 0.3s ease;
 &:hover,
 &:active {
  cursor: pointer;
  color: white;
  background-color: #464646;
 }
`;
