import styled from 'styled-components';

export const Container = styled.li`
 width: 100%;
 height: 150px;

 border-radius: 0.75rem;
 padding: 1rem 1.25rem;

 display: flex;
 align-items: center;
 justify-content: space-between;

 list-style: none;
 background-color: white;
`;

export const LeftContainer = styled.div`
 height: 100%;
 display: flex;
 gap: 0.5rem;
`;

export const Image = styled.div`
 width: 125px;
 height: 125px;
 cursor: pointer;
 > img {
  border-radius: 0.25rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
 }
`;

export const InfoContainer = styled.div`
 display: flex;
 flex-direction: column;
`;

export const Title = styled.strong`
 font-weight: 400;
 font-size: 20px;
 color: #2b3445;
 margin-bottom: 0.5rem;
 cursor: pointer;
`;

export const Price = styled.span`
 font-weight: 700;
 font-size: 18px;
 color: #2b3445;
 margin-bottom: 1rem;
`;

export const CustomStepper = styled.div`
 display: flex;
 align-items: center;
 gap: 1.25rem;

 > button {
  width: 30px;
  height: 30px;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f5f5f5;

  transition: all 0.3s ease;
  &:hover {
   cursor: pointer;
   background-color: #a6a6a6;
  }

  &.trash {
   color: #ff7667;

   &:hover {
    cursor: pointer;
    background-color: #a6a6a6;
   }
  }

  &:disabled {
   cursor: not-allowed;
   &:hover {
    background-color: #f5f5f5;
   }
  }
 }
`;
