import styled from 'styled-components';

export const Container = styled.form`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 0.75rem;

 > button {
  margin-top: 0.75rem;
 }
`;

export const ErrrorMessage = styled.span`
 font-family: 'Lato';
 font-size: 0.875rem;
 font-weight: 400;
 font-style: normal;
 width: 100%;
 position: 'relative';
 padding: '0.25rem 0';
 color: #f85757;
 bottom: 1rem;
 margin-top: -2px;
`;
