import styled from 'styled-components';

export const Container = styled.nav`
 display: flex;
 align-items: center;
 justify-content: flex-end;

 padding: 0 7.8125rem;

 background-color: black;
 width: 100%;
 height: 3.5rem;

 display: flex;
 justify-content: flex-end;
`;

export const Navigation = styled.ul`
 display: flex;
 justify-content: flex-end;
 gap: 1.375rem;

 list-style: none;

 font-size: 16px;
 color: white;
`;

export const LinkButton = styled.button`
 background-color: transparent;
 cursor: pointer;
 color: white;

 transition: color 0.3s ease;
 &:hover,
 &:active {
  color: #f79f7c;
 }
`;
