import styled from 'styled-components';

export const Container = styled.header`
 width: 100%;
 height: 100%;
 max-height: 7rem;

 padding: 0 3.5rem;
 margin-top: 1.5rem;

 display: flex;
 align-items: center;
 justify-content: space-between;

 .title {
  color: #f79f7c;
  font-size: 2rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 1.25rem;

  span {
   width: 2rem;
   height: 2rem;
  }

  .button {
   max-width: 10.1875rem;
  }
 }
`;
