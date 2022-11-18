import { BsBasket } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { CardProduct } from '../CardProduct';
import { Carrossel, Container, TitleList } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const navigate = useNavigate();
 return (
  <Container>
   <Carrossel>
    <TitleList>
     <BsBasket size={25} />
     <h1>Lista de Produtos</h1>
    </TitleList>
    {data?.map(
     (produto) =>
      produto.status !== false && (
       <CardProduct
        data={{
         nome: produto.nome,
         preco: produto.preco,
         image: produto.imagens[0]?.url,
         navigate: () => navigate(`/produtos/${produto.produto_id}`),
        }}
       />
      )
    )}
   </Carrossel>
  </Container>
 );
}
