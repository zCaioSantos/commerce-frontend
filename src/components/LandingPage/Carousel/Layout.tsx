import { useNavigate } from 'react-router-dom';
import { CardProduct } from '../CardProduct';
import { Container, Carrossel } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const navigate = useNavigate();
 return (
  <Container>
   <Carrossel>
    {data?.map(
     (produto) =>
      produto.status !== false && (
       <CardProduct
        data={{
         nome: produto.nome,
         preco: produto.preco,
         navigate: () => navigate(`/produtos/${produto.produto_id}`),
        }}
       />
      )
    )}
   </Carrossel>
  </Container>
 );
}
