import styled from 'styled-components';

export const Container = styled.li`
 display: flex;
 align-items: center;
 gap: 1rem;
 padding: 1.5rem;
 background-color: white;
 border-radius: 0.3125rem;
`;

export const Content = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 0.25rem;

 > .left {
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
 }
`;
