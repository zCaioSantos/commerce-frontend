import styled from 'styled-components';

export const Button = styled.button`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0.875rem 2rem;

 width: 100%;
 height: 50px;

 background: #f79f7c;
 border-radius: 0.375rem;

 color: white;
 font-size: 1rem;
 font-weight: 600;

 transition: filter 0.3s ease;
 &:hover,
 &:active {
  cursor: pointer;
  filter: brightness(1.1);
 }

 &:disabled {
  opacity: 0.5;
  cursor: not-allowed;
 }
`;
