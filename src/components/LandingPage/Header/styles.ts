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

export const CartSize = styled.span`
 position: absolute;
 top: -5px;
 right: -5px;

 width: 20px;
 height: 20px;

 display: flex;
 align-items: center;
 justify-content: center;

 background-color: #f79f7c;
 border-radius: 100%;

 font-family: 'Lato';
 font-size: 0.875rem;

 transition: color 0.3s ease;
`;

export const LinkButton = styled.button`
 background-color: transparent;
 cursor: pointer;
 font-size: 1.875rem;

 position: relative;

 transition: color 0.3s ease;
 &:hover {
  color: #f79f7c;
 }

 &:hover ${CartSize} {
  color: white;
 }
`;

export const Logo = styled.img`
 cursor: pointer;
 height: 50px;
`;
