import styled from 'styled-components';

export const Container = styled.div`
 width: 7rem;
 padding: 56px 0px;
 border-right: 1px solid rgba(70, 70, 70, 0.2);

 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;

 .header,
 .footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.375rem;

  nav {
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2.5rem;
  }
 }
`;

export const Logo = styled.img`
 width: 3rem;
 height: 3rem;
`;
