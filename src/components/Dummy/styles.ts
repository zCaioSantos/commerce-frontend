import styled from 'styled-components';

export const Container = styled.section`
 display: flex;
 flex-direction: column;
 > span {
  margin-bottom: 8px;
 }
 > form {
  display: flex;
  .name-of-user-label {
   display: flex;
   flex-direction: column;
   font-size: 1.125rem;
  }
  .name-of-user-input {
   border: 1px solid #ccc;
   padding: 4px 8px;
  }
 }
`;
