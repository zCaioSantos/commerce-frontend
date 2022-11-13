import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;

 width: 100%;
 height: 7rem;

 padding: 0 7.8125rem;
`;

export const Nav = styled.div`
 width: 100%;

 display: flex;
 justify-content: space-between;
`;

export const DIV = styled.nav`
 display: flex;
 align-items: center;
 gap: 7rem;

 a {
  text-transform: uppercase;
  font-size: 1rem;
  text-decoration: none;
  color: #464646;
  font-weight: bold;
 }
`;

export const GroupIcon = styled.div`
 display: flex;
 align-items: center;
 gap: 2rem;
`;

export const Logo = styled.img`
 width: 4.5rem;
 height: 4.5rem;
`;
