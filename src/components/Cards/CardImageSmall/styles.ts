import styled from 'styled-components';

export const Container = styled.ul`
 width: 100%;
 display: flex;
 align-items: center;
 gap: 0.25rem;
 list-style: none;
`;

export const ContainerImg = styled.li`
 width: 80px;
 height: 80px;
 position: relative;

 > img {
  width: 100%;
  object-fit: cover;
 }
`;

export const ButtonClose = styled.button`
 width: 30px;
 height: 30px;
 border-radius: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: #ffae88;
 color: white;
 font-size: 15px;
 position: absolute;
 top: -6px;
 right: -6px;
 cursor: pointer;
 z-index: 3;
`;
