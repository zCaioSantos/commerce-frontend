import { BsBasket } from 'react-icons/bs';
import { CardProduct } from '../CardProduct';
import { Carrossel, Container, TitleList } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <Container>
   <Carrossel>
    <TitleList>
     <BsBasket size={25} />
     <h1>Lista de Produtos</h1>
    </TitleList>
    {data?.map(
     (produto) => produto.status !== false && <CardProduct data={produto} />
    )}
   </Carrossel>
  </Container>
 );
}
