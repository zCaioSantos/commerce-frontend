import styled from 'styled-components';

export const Content = styled.article`
 width: 100%;
 height: 100%;
 padding: 5rem 7.8125rem;

 display: flex;
 flex-direction: column;

 background-color: #f6f6f6;
 display: flex;
 gap: 2rem;
`;

export const Title = styled.span`
 font-weight: 400;
 font-size: 20px;
 color: #2b3445;
 text-transform: uppercase;
`;

export const RequestList = styled.ul`
 display: flex;
 flex-direction: column;
 gap: 0.5rem;
`;
