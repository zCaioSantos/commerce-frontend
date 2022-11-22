import styled from 'styled-components';

export const Container = styled.nav`
 width: 100%;
 min-height: 56px;

 padding: 0 7.8125rem;

 background-color: black;

 display: flex;
 align-items: center;
 justify-content: flex-end;
`;

export const Navigation = styled.ul`
 display: flex;
 align-items: center;
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
