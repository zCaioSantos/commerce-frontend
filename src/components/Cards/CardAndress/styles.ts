import styled from 'styled-components';

export const Container = styled.label`
 display: flex;
 align-items: center;
 gap: 1rem;
 padding: 1rem 0.75rem;
 background-color: white;
 border-radius: 0.3125rem;
 cursor: pointer;
`;

export const Content = styled.div`
 display: flex;
 flex-direction: column;
 gap: 0.25rem;

 > strong {
  font-size: 1rem;
  font-weight: 400;
 }

 > span {
  font-size: 0.875rem;
  font-weight: 400;
  color: #5c5c5c;
 }
`;
