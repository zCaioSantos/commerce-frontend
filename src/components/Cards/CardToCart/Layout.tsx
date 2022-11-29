import { BsTrashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useCartShop } from '../../../services/context/ShopCart/hook';
import {
 Container,
 CustomStepper,
 Image,
 InfoContainer,
 LeftContainer,
 Price,
 Title,
} from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const { onIncrease, onDecrease, onRemoveToCart } = useCartShop();
 const navigate = useNavigate();
 return (
  <Container>
   <LeftContainer>
    <Image onClick={() => navigate(`/produtos/${data.id}`)}>
     <img
      src={`/src/assets/images/${data.imagens[0].url}`}
      alt={`Imagem do produto: ${data.nome}`}
     />
    </Image>
    <InfoContainer onClick={() => navigate(`/produtos/${data.id}`)}>
     <Title>{data.nome}</Title>
     <Price>
      {data.preco.toLocaleString('pr-br', {
       style: 'currency',
       currency: 'BRL',
      })}
     </Price>
    </InfoContainer>
   </LeftContainer>
   <CustomStepper>
    <button
     type="button"
     onClick={() => onDecrease(data.id)}
     disabled={data.quantidade <= 1}
    >
     -
    </button>
    <span>{data.quantidade}</span>
    <button
     type="button"
     onClick={() => onIncrease(data.id)}
     disabled={data.quantidade === data.estoque}
    >
     +
    </button>
    <button
     type="button"
     className="trash"
     onClick={() => onRemoveToCart(data.id)}
    >
     <BsTrashFill />
    </button>
   </CustomStepper>
  </Container>
 );
}
