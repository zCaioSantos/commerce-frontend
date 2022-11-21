import styled from 'styled-components';

export const CardContainer = styled.li`
 width: 14.25rem;

 display: flex;
 align-items: center;

 flex-direction: column;

 background-color: white;
`;

export const Image = styled.div`
 padding: 0.25rem;
 width: 225px;
 height: 14.0625rem;

 cursor: pointer;
 > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
 }
`;

export const Content = styled.div`
 width: 100%;
 padding: 1.125rem 1rem;

 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;

 > button {
  width: 193.19px;
  height: 36px;
  background-color: transparent;
  border: 1px solid rgba(34, 34, 34, 0.5);
  border-radius: 3px;
  color: #2b3445;

  transition: all 0.3s ease;
  &:hover {
   cursor: pointer;
   background-color: #2b3445;
   color: white;
  }
 }
`;

export const Title = styled.strong`
 font-weight: 400;
 font-size: 14px;
 color: #2b3445;
 margin-bottom: 0.5rem;
 cursor: pointer;
`;

export const Price = styled.span`
 font-weight: 700;
 font-size: 17px;
 color: #2b3445;
 margin-bottom: 1rem;
`;
