import styled from 'styled-components';

export const Container = styled.form`
 width: 100%;
 display: flex;
 flex-direction: column;
 gap: 0.5rem;
`;

export const Title = styled.legend`
 font-weight: 400;
 font-size: 20px;
 color: #2b3445;
 margin-bottom: 0.5rem;
`;

export const Select = styled.select`
 width: 100%;
 max-height: 3.375rem;
 padding: 16px;

 background: #ebebeb;
 border-radius: 6px;
 appearance: none;
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
