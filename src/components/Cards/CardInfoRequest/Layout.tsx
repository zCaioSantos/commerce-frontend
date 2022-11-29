import { useState } from 'react';
import { BsChevronDown, BsChevronUp, BsGeoAlt } from 'react-icons/bs';
import {
 Capa,
 Container,
 Content,
 Footer,
 Header,
 Info,
 InfoDate,
 InfoProduct,
 InfoProductLeft,
 ProductsList,
 Status,
 Text,
 Toggle,
} from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const [handleOpen, setHandleOpen] = useState(false);
 return (
  <Container className={handleOpen ? 'open' : ''}>
   <Header onClick={() => setHandleOpen((old) => !old)}>
    <Info>
     <Status>
      <Text>{data.status_pedido}</Text>
      <Text>{data.metodo_pagamento}</Text>
     </Status>
     <InfoDate>
      <span>
       Pedido feito em:{' '}
       {new Intl.DateTimeFormat('pt-BR').format(new Date(data.data))}
      </span>
      <small>ID do pedido: {data.id}</small>
     </InfoDate>
    </Info>
    <Toggle>
     <Text>Detalhes do pedido</Text>
     {handleOpen ? <BsChevronUp size={25} /> : <BsChevronDown size={25} />}
    </Toggle>
   </Header>

   <Content>
    <ProductsList>
     {data.pedidos.map((produto) => (
      <InfoProduct key={produto.item_id}>
       <InfoProductLeft>
        <Capa>
         <img
          src={`/src/assets/images/${produto.produto.imagens[0].url}`}
          alt={`Imagem do produto: ${produto.produto.nome}`}
         />
        </Capa>
        <div>
         <strong>{produto.produto.nome}</strong>
         <span>
          Valor Unitario:{' '}
          {produto.precoUnitario.toLocaleString('pr-br', {
           style: 'currency',
           currency: 'BRL',
          })}
         </span>
        </div>
       </InfoProductLeft>
       <Text>QTD: {produto.quantidade}</Text>
      </InfoProduct>
     ))}
    </ProductsList>
    <Footer>
     <div className="andress">
      <BsGeoAlt size={20} />
      <div className="infoAndress">
       <span>
        Endereço de entrega: {data.endereco.logradouro}, {data.endereco.numero}
       </span>
       <span>CEP: {data.endereco.cep}</span>
      </div>
     </div>
     <Text>
      Total:{' '}
      {data.valor_total.toLocaleString('pr-br', {
       style: 'currency',
       currency: 'BRL',
      })}
     </Text>
    </Footer>
   </Content>
  </Container>
 );
}
