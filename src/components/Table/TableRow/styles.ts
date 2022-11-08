import styled from 'styled-components';

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

export const Button = styled.button`
 background-color: transparent;
 color: #464646;
 cursor: pointer;

 transition: filter 0.3 ease;
 &:hover {
  filter: brightness(1.5);
 }
`;

export const Stauts = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;

 &.enable {
  color: #f79f7c;
 }
`;

export const Options = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-evenly;
 gap: 0.5rem;
`;
