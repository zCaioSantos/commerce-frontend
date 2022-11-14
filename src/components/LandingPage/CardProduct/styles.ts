import styled from 'styled-components';

export const CardContainer = styled.li`
 width: 250px;
 height: 300px;
 box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.1);
 cursor: pointer;
 transition: all 120ms;

 display: flex;
 align-items: center;
 flex-direction: column;

 background: #fff;
 padding: 20px;

 position: relative;
 overflow: hidden;

 &:hover {
  opacity: 0.9;
 }

 &:active {
  transform: scale(0.98);
 }
`;

export const Title = styled.strong`
 font-size: 1.125rem;
 font-weight: 500;
 margin-bottom: 0.25rem;
`;

export const Price = styled.span`
 font-size: 1rem;
 font-weight: 800;
`;

export const Image = styled.img`
 background: rgb(241, 241, 241);
 width: 100%;
 height: 100%;
 object-fit: cover;
 display: grid;
 place-items: center;
`;
