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

export const Select = styled.select`
 width: 100%;
 max-height: 3.375rem;
 padding: 16px;

 background: #ebebeb;
 border-radius: 6px;
 appearance: none;
`;
