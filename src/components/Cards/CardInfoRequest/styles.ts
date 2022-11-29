import styled from 'styled-components';

export const Content = styled.div`
 display: none;
 flex-direction: column;
 gap: 0.5rem;
`;

export const ProductsList = styled.li`
 flex-direction: column;
 gap: 12px;
 list-style: none;
 padding: 0 8px;
`;

export const Container = styled.div`
 width: 100%;
 border-bottom: 1px solid #d1d5db;

 padding: 0 12px;
 border: 1px solid #d1d5db;

 &.open ${Content} {
  display: flex;
 }
`;

export const Header = styled.div`
 align-items: center;
 display: flex;
 justify-content: center;
 gap: 1.5rem;
 cursor: pointer;
 padding: 1rem 8px;
`;

export const Toggle = styled.div`
 margin-right: 0.25rem;
 display: flex;
 align-items: center;
 gap: 0.75rem;
`;

export const Info = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: space-between;
`;

export const Title = styled.span`
 font-weight: 400;
 font-size: 20px;
 color: #2b3445;
`;

export const Status = styled.div`
 display: flex;
 align-items: center;
 gap: 0.75rem;

 > span {
  text-transform: uppercase;

  &:first-child {
   padding-right: 12px;
   border-right: 1px solid #d1d5db;
   font-weight: bold;
  }

  &:last-child {
   font-size: 0.875rem;
  }
 }
`;

export const Text = styled.span`
 font-weight: 400;
 font-size: 16px;
 color: #2b3445;
`;

export const InfoDate = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 text-align: end;

 font-weight: 400;
 font-size: 14px;
 color: #2b3445;

 padding-right: 1.5rem;
 border-right: 1px solid #d1d5db;
`;

export const InfoProduct = styled.li`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0.75rem 1rem;
`;

export const InfoProductLeft = styled.div`
 display: flex;
 align-items: center;
 gap: 0.75rem;

 > div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > strong {
   font-weight: 400;
   font-size: 16px;
   color: #2b3445;
  }

  > span {
   font-weight: 400;
   font-size: 16px;
   color: #2b3445;
  }
 }
`;

export const Capa = styled.div`
 width: 100px;
 height: 100px;

 display: flex;
 align-items: center;
 justify-content: center;

 > img {
  width: 100%;
  object-fit: cover;
 }
`;

export const Footer = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 1rem;

 font-size: 14px;
 color: #2b3445;

 > span {
  font-weight: bold;
 }

 > .andress {
  display: flex;
  align-items: center;
  gap: 8px;

  > .infoAndress {
   display: flex;
   flex-direction: column;
   gap: 0.25rem;
  }
 }
`;
