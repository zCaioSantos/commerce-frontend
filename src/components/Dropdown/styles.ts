import styled from 'styled-components';

export const Content = styled.div`
 position: absolute;
 overflow: hidden;
 z-index: 3;

 top: 61px;
 right: calc(50% - 90px);

 width: 190px;
 opacity: 0;
 visibility: hidden;

 border-bottom-left-radius: 6px;
 border-bottom-right-radius: 6px;

 border-top: 0;
 background: #000;

 translate: 0 -25px;
 transition: 0.4s;

 > button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 16px;
  width: 100%;
  height: 56px;
  background-color: #000;
  cursor: pointer;
  color: white;

  &:hover {
   color: #f79f7c;
  }

  &.hidden {
   display: none;
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
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  color: #f9f9f9;
  background-color: transparent;
  cursor: pointer;

  position: relative;
  transition: 0.3s;

  &:hover {
   color: #f79f7c;
  }
 }
`;
