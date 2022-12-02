import { useNavigate } from 'react-router-dom';
import { useCartShop } from '../../../services/context/ShopCart/hook';
import { Button } from '../../Button';
import { CardContainer, Content, Image, Price, Title } from './styles';

import { LayotProps } from './type';

export function Layout({ data }: LayotProps) {
 const { onAddToCart } = useCartShop();
 const navigate = useNavigate();
 return (
  <CardContainer>
   <Image onClick={() => navigate(`/produtos/${data.id}`)}>
    <img
     src={`src/assets/images/${String(data.imagens[0]?.url)}`}
     alt={`product ${data.nome}`}
    />
   </Image>
   <Content>
    <Title onClick={() => navigate(`/produtos/${data.id}`)}>{data.nome}</Title>
    <Price>
     {data.preco.toLocaleString('pr-br', {
      style: 'currency',
      currency: 'BRL',
     })}
    </Price>
    <Button
     data={{
      title: 'Adicionar',
      type: 'button',
      onClick: () => onAddToCart({ ...data, quantidade: 1 }),
      disabled: data.estoque === 0,
     }}
    />
   </Content>
  </CardContainer>
 );
}
