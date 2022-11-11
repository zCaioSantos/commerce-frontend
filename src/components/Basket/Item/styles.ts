import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 margin: 2rem;

`;

export const Product = styled.div`
 display: flex;
`

export const Imagem = styled.img`
 width: 300px;
 height: 200px;
 object-fit: cover;
`

export const Infos = styled.div`
 display: flex;

 h5{
  margin-bottom: 22px;
 }
 small{
  font-size: 16px;
  font-weight: lighter;
  color: #827979;  
 }

`;

export const Desc = styled.div`
 display: flex;
 height: 138px;
 width: 758px;
 flex-direction: column;
 margin: 1rem;
 `

export const Prices = styled.div`
 display: flex;
 height: 200px;
 flex-direction: column;
 justify-content: space-around;
 align-items: flex-end;
 padding: 1rem 0;
 h5{
  color: #F79F7C;
 }
`
export const ItensQtd = styled.div`
 display: flex;
 align-items: center;
 p{
  font-size: 20px;
 }
`

export const Qtd = styled.div`
 width: 56px;
 height: 45px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 
`

export const Remove = styled.div`
 display: flex;
 width: 92px;
 justify-content: space-between;
 align-items: center;
 color: #FF0000;
 margin: 0 1rem;
 p{
  font-size: 16px;
 }
`






