import styled from 'styled-components';

export const Container = styled.div`
 height: 650px;
`;

export const Carrossel = styled.div`
 height: 100%;
 margin: 1rem;
 width: 1480px;
 display: flex;
 overflow-x: auto;
 scroll-behavior: smooth;
`;

export const Item = styled.div`
 margin: 5rem 1rem;
`;

export const Capa = styled.img`
 width: 420px;
 height: 400px;
`;
export const Info = styled.div`
 width: auto;
 height: 90px;
 display: flex;
 flex-direction: column;
 justify-content: space-evenly;
 margin: 20px;
`;

export const Desc = styled.div`
 font-size: 20px;
 color: #464646;
`;
export const Category = styled.div`
 font-size: 16px;
 font-style: light;
 opacity: 40%;
`;

export const Price = styled.div`
 font-size: 20px;
 font-weight: 600;
`;
