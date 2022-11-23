import styled from 'styled-components';

export const Container = styled.article`
 height: 100%;

 display: flex;
 align-items: center;
 justify-content: center;
`;

export const Content = styled.section`
 max-width: 500px;

 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 gap: 4.375rem;

 > img {
  cursor: pointer;
  max-width: 70%;
 }
`;
