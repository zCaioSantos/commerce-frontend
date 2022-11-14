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
 display: flex;
 align-items: center;

 background-color: transparent;
 color: #464646;
 cursor: pointer;
 font-size: 1.25rem;

 text-transform: uppercase;

 transition: filter 0.3 ease;
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
 justify-content: space-between;
 gap: 0.5rem;
`;

export const Switch = styled.div`
 font-size: 17px;
 position: relative;
 display: inline-block;
 width: 40px;
 height: 25px;
`;

export const Slider = styled.span`
 position: absolute;
 cursor: pointer;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background-color: #ccc;
 transition: 0.4s;
 border-radius: 30px;

 &::before {
  position: absolute;
  content: '';
  height: 15px;
  width: 15px;
  border-radius: 20px;
  left: 0.3em;
  bottom: 0.3em;
  background-color: white;
  transition: 0.4s;
 }

 &.enable {
  background-color: #f79f7c;

  &::before {
   transform: translateX(15px);
  }
 }
`;
