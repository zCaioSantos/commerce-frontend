import styled from 'styled-components';

export const Container = styled.main`
 min-height: 100%;
 display: flex;
 flex-direction: column;
`;

export const Content = styled.article`
 height: 100%;
 flex: 1;
 padding: 1rem 7.8125rem;
 overflow-x: hidden;
`;

export const ContainerLoading = styled.article`
 height: 100%;
 flex: 1;

 display: grid;
 place-items: center;

 padding: 0 7.8125rem;
`;
