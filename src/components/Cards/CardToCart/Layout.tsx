import { BsTrashFill } from 'react-icons/bs';
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
 return (
  <Container>
   <LeftContainer>
    <Image>
     <img
      src={`/src/assets/images/${data.imagens[0].url}`}
      alt={`Imagem do produto: ${data.nome}`}
     />
    </Image>
    <InfoContainer>
     <Title>{data.nome}</Title>
     <Price>R${data.preco},00</Price>
    </InfoContainer>
   </LeftContainer>
   <CustomStepper>
    <button
     type="button"
     onClick={() => onDecrease(data.produto_id)}
     disabled={data.quantidade <= 1}
    >
     -
    </button>
    <span>{data.quantidade}</span>
    <button
     type="button"
     onClick={() => onIncrease(data.produto_id)}
     disabled={data.quantidade === data.estoque}
    >
     +
    </button>
    <button
     type="button"
     className="trash"
     onClick={() => onRemoveToCart(data.produto_id)}
    >
     <BsTrashFill />
    </button>
   </CustomStepper>
  </Container>
 );
}
