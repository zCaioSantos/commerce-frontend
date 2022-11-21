import styled from 'styled-components';

export const Container = styled.main`
 min-height: 100%;
 height: 100vh;
 display: flex;
 flex-direction: column;
`;

export const Content = styled.article`
 height: 100%;
 flex: 1;
 padding: 5rem 125px;
 overflow-x: hidden;
 background-color: #f6f6f6;
`;

export const ListProducts = styled.ul`
 display: flex;
 flex-direction: column;
 gap: 0.5rem;

 height: 100%;
`;

export const ContainerLoading = styled.article`
 height: 100%;
 flex: 1;

 display: grid;
 place-items: center;

 padding: 0 7.8125rem;
`;

export const CartContainer = styled.section`
 display: flex;
 gap: 5.375rem;
 height: 100%;

 .left {
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: hidden;
  overflow-y: auto;
 }

 .right {
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > strong {
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-weight: 400;
   font-size: 24px;
   padding: 0 0 1.5rem;
   border-bottom: 1px solid #cccccc;
  }
 }
`;
