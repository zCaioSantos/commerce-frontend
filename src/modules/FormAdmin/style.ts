import styled from 'styled-components';

export const ContainerForm = styled.form`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 1rem;

 .toggle {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 1.5rem;
 }
`;

export const ButtonToggle = styled.button`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 16px 24px;
 gap: 8px;

 width: 100%;
 height: 58px;

 border-radius: 6px;

 font-weight: 300;

 background: #ebebeb;
 color: #7c7c8a;

 transition: background 0.3s ease;
 &:hover,
 &:active {
  cursor: pointer;
  background: #464646;
  color: white;
 }

 &.select {
  color: white;
  background: #464646;
 }
`;
