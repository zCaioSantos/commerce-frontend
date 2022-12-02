import styled from 'styled-components';

export const Container = styled.form`
 width: 100%;
 display: flex;
 flex-direction: column;
 gap: 0.5rem;
`;

export const MethodContainer = styled.fieldset`
 display: flex;
 align-items: center;
 justify-content: center;
`;

export const AndressContainer = styled.fieldset`
 display: flex;
 flex-direction: column;
 justify-content: center;
 gap: 0.5rem;

 overflow-y: auto;
 max-height: 26.875rem;
`;

export const Title = styled.legend`
 font-weight: 400;
 font-size: 20px;
 color: #2b3445;
 margin-bottom: 0.5rem;
`;

export const WarnAndress = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 1rem;

 > strong {
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #2b3445;
  margin-bottom: 0.5rem;
 }

 > button {
  max-width: 18.75rem;
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
