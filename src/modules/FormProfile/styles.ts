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
