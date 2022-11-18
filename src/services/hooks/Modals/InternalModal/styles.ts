import styled from 'styled-components';
import { AlignProps } from './types';

export const Container = styled.div.attrs(
 (props: {
  alignModal: AlignProps;
  showCloseButton: boolean;
  showModal: boolean;
 }) => props
)`
 display: flex;
 justify-content: center;
 align-items: center;

 position: absolute;

 top: 0;
 left: 0;
 right: 0;
 bottom: 0;

 z-index: 1000;

 .modal-container {
  display: flex;
  position: absolute;
  width: 100%;

  z-index: 1100;

  height: 100%;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: ${(props) =>
   props.alignModal ? props.alignModal : 'center'};

  .modal-content {
   display: flex;
   flex-direction: column;
   background-color: white;
   min-width: 500px;
   min-height: 12.5rem;
   border-radius: 0.5rem;
   padding: 20px;

   .modal-close {
    visibility: ${(props) => (props.showCloseButton ? 'visible' : 'hidden')};
    cursor: pointer;
    position: relative;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    &::after,
    &::before {
     content: '';
     height: 1rem;
     width: 1rem;
     border-top: 1px solid #000;
     position: absolute;
     top: 4px;
     right: -6px;
     transform: rotate(-45deg);
    }
    &::before {
     right: 5px;
     transform: rotate(45deg);
    }
    &:hover {
     opacity: 0.3;
     transition: all 0.4s;
    }
    :not(:hover) {
     transition: all 0.4s;
    }
   }
  }
 }
`;
