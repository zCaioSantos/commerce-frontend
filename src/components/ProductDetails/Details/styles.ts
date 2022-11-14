import styled from 'styled-components';

export const Details = styled.div`
 width: 763px;
 height: 444px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
`;

export const Infos = styled.div`
 width: 763px;
 height: 168px;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
`;

export const Stars = styled.div`
 color: #f79f7c;
`;

export const Actions = styled.div`
 width: 608px;
 display: flex;
 justify-content: space-between;
`;

export const Qtd = styled.div`
 width: 130px;
 height: 52px;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 border: solid 1px #000;
 border-radius: 10px;

 &:hover .BsPlusLg,
 .BsDashLg {
  cursor: pointer;
 }
`;

export const ControlBtn = styled.div`
 width: 450px;
 height: 54px;
`;
