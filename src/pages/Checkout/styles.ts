import styled from 'styled-components';

export const Container = styled.article`
 display: flex;
 gap: 5.375rem;
 padding: 1.5625rem 7.8125rem;
 background-color: #f6f6f6;
 height: 100%;
`;

export const LeftContainer = styled.section`
 flex: 1;
 display: flex;
 gap: 0.75rem;
 flex-direction: column;
`;

export const RightContainer = styled.section`
 flex: 1;
 display: flex;
 flex-direction: column;
 gap: 0.5rem;
`;

export const Info = styled.span`
 font-weight: 400;
 font-size: 20px;
 color: #2b3445;
 margin-bottom: 0.5rem;

 display: flex;
 align-items: center;
 justify-content: space-between;

 padding: 0 0 1.5rem;
 border-bottom: 1px solid #cccccc;

 &.top {
  margin-top: 1rem;
  padding: 1.5rem 0;
  border-top: 1px solid #cccccc;
 }
`;
