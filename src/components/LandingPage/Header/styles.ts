import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 padding: 1.5rem 7.8125rem;
`;

export const ContainerNavigation = styled.nav`
 display: flex;
 align-items: center;
 gap: 2rem;
`;

export const LinkButton = styled.button`
 background-color: transparent;
 cursor: pointer;
 font-size: 1.875rem;

 transition: color 0.3s ease;
 &:hover {
  color: #f79f7c;
 }
`;

export const Logo = styled.img`
 cursor: pointer;
 height: 3.125rem;
`;
