import styled from 'styled-components';

export const Content = styled.article`
 padding: 2.125rem 3.375rem;
`;

export const Table = styled.table`
 width: 100%;

 border-collapse: separate;
 border-spacing: 0 0.5rem;
 overflow: hidden;

 height: max-content;
`;

export const Header = styled.thead`
 th {
  padding: 20px 32px;
  text-align: left;
  font-weight: 700;
  color: #464646;

  &.small {
   width: 5px;
  }
 }
`;

export const Row = styled.tr`
 border-radius: 5px;
 td {
  background: #ebebeb;

  text-align: left;
  font-weight: 400;
  color: #464646;

  padding: 20px 32px;

  &:first-child {
   border-right-style: solid;
   border-top-left-radius: 5px;
   border-bottom-left-radius: 5px;
  }

  &:last-child {
   border-right-style: solid;
   border-bottom-right-radius: 5px;
   border-top-right-radius: 5px;
  }
 }
`;

export const Select = styled.select`
 background-color: transparent;

 text-align: left;
 font-weight: 400;
 color: #464646;
`;

export const Options = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 0.5rem;
`;

export const Button = styled.button`
 display: flex;
 align-items: center;

 background-color: transparent;
 color: #464646;
 cursor: pointer;
 font-size: 1.25rem;

 text-transform: uppercase;

 transition: filter 0.3 ease;
`;
