import { BsBasket } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { CardProduct } from '../CardProduct';
import { Container, Carrossel, TitleList } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const navigate = useNavigate();
 return (
  <Container>
   <Carrossel>
    {data?.map(
     (produto) =>
      produto.status !== false && (
       <>
        <TitleList>
         <BsBasket size={25} />
         <h1>Lista de Produtos</h1>
        </TitleList>
        <CardProduct
         data={{
          nome: produto.nome,
          preco: produto.preco,
          navigate: () => navigate(`/produtos/${produto.produto_id}`),
         }}
        />
       </>
      )
    )}
   </Carrossel>
  </Container>
 );
}
