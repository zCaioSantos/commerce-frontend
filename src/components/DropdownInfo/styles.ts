import styled from 'styled-components';

export const Content = styled.div`
 position: absolute;
 overflow: hidden;
 z-index: 5;

 &.visible {
  opacity: 1;
  visibility: visible;
 }

 top: 80px;
 right: calc(50% - 90px);

 width: 190px;
 opacity: 0;
 visibility: hidden;

 border-top: 0;
 background: white;

 translate: 0 -25px;
 transition: 0.4s;
 -webkit-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.25);
 box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.25);

 > button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 16px;
  width: 100%;
  height: 56px;
  background-color: transparent;
  cursor: pointer;
  color: #101010;

  &:hover {
   color: #f79f7c;
  }
 }
`;

export const Dropdown = styled.div`
 position: relative;
 color: black;

 &:hover ${Content} {
  opacity: 1;
  visibility: visible;
 }

 > button {
  width: 2.1875rem;
  height: 2.1875rem;
  border-radius: 100%;

  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  color: #464646;
  background-color: #e9e9e9;
  cursor: pointer;

  position: relative;
  transition: 0.3s;

  &:hover {
   color: #f79f7c;
  }
 }
`;
