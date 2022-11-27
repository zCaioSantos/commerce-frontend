import styled from 'styled-components';

export const Content = styled.article`
 width: 100%;
 height: 100%;
 padding: 5rem 7.8125rem;

 background-color: #f6f6f6;
 display: flex;
 gap: 5.375rem;
`;

export const Title = styled.span`
 font-weight: 400;
 font-size: 20px;
 color: #2b3445;
`;

export const ContainerLeft = styled.section`
 flex: 1;
`;

export const ContainerRight = styled.section`
 flex: 1;
`;

export const ContainerLoading = styled.article`
 height: 100%;
 flex: 1;

 display: grid;
 place-items: center;

 padding: 0 7.8125rem;
`;
