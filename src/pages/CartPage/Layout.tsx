import { CardToCart } from '../../components/Cards/CardToCart';
import { Footer } from '../../components/LandingPage/Footer';
import { Header } from '../../components/LandingPage/Header';
import { TopHeader } from '../../components/LandingPage/TopHeader';
import { useCartShop } from '../../services/context/ShopCart/hook';
import { Container, Content, ListProducts } from './styles';

export function Layout() {
 const { listCartProducts, getValueTotal } = useCartShop();
 return (
  <Container>
   <TopHeader />
   <Header />

   <Content>
    <ListProducts>
     {!listCartProducts.length && (
      <strong>Você ainda não tem nenhum produto no carrinho..</strong>
     )}
     {listCartProducts.length > 0 && (
      <>
       <small>Valor total: R${getValueTotal()}</small>
       {listCartProducts.map((produto) => (
        <CardToCart data={produto} />
       ))}
      </>
     )}
    </ListProducts>
   </Content>

   <Footer />
  </Container>
 );
}
