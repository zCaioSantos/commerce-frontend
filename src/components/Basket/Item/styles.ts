import styled from 'styled-components';

export const Container = styled.li`
 width: 100%;
 height: 200px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 overflow: hidden;
 margin: 2rem 1rem;
`;

export const Info = styled.div`
 height: 100%;

 display: flex;
 gap: 1rem;

 img {
  height: 100%;
 }
`;

export const Description = styled.div`
 display: flex;
 flex-direction: column;
 gap: 0.5rem;

 font-size: 1.75rem;
 small {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  font-size: 1rem;
  font-weight: 400;
 }
`;

export const DeleteButton = styled.button`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 0.5rem;
 padding: 0.875rem 2rem;

 width: 100%;
 height: 50px;

 background: transparent;

 color: #f79f7c;
 font-size: 1rem;
 font-weight: 600;

 transition: filter 0.3s ease;
 &:hover,
 &:active {
  cursor: pointer;
 }
`;

export const Amount = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 0.5rem;
 width: 10.375rem;

 font-size: 1.5625rem;

 > input[type='number'], input::-webkit-outer-spin-button, input::-webkit-inner-spin-button{
  -webkit-appearance: none;
  background-color: transparent;
  width: 100%;
  text-align: center;
  
  &::placeholder {
   text-align: center;
  }
 }
`;
