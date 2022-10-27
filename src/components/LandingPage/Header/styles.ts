import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: center;
 width: 100%;
 height: 122px;
`;

export const Nav = styled.div`
 width: 100%;
 height: 72px;
 margin: 24px 12px;
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
`;

export const DIV = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 width: 885px;
 height: 24px;
 margin: 24px 0px;
 padding: 0;
 align-items: center;

 a {
  text-decoration: none;
  color: black;
 }
`;
export const Icon = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 width: 112px;
 height: 40px;
 margin: 16px 0px;
`;

export const Logo = styled.img`
 width: 72px;
 height: 72px;
`;
