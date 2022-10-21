import styled from 'styled-components';

export const Button = styled.button`
 width: 40px;
 height: 40px;

 display: flex;
 align-items: center;
 justify-content: center;

 font-size: 2.5rem;
 color: #464646;

 background: transparent;

 cursor: pointer;
 transition: color 0.3s ease;
 &:hover {
  color: #f79f7c;
 }

 &.active {
  color: #f79f7c;
 }
`;
