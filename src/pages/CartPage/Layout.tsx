import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { CardToCart } from '../../components/Cards/CardToCart';
import { HrVertical } from '../../components/HrVertical';
import { Footer } from '../../components/LandingPage/Footer';
import { Header } from '../../components/LandingPage/Header';
import { TopHeader } from '../../components/LandingPage/TopHeader';
import { useCartShop } from '../../services/context/ShopCart/hook';
import { CartContainer, Container, Content, ListProducts } from './styles';

export function Layout() {
 const { listCartProducts, getValueTotal, getQuantityProducts } = useCartShop();
 const navigate = useNavigate();
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
      <CartContainer>
       <div className="left">
        {listCartProducts.map((produto) => (
         <CardToCart data={produto} />
        ))}
       </div>
       <HrVertical />
       <div className="right">
        <strong>
         Produtos diferentes: <span>{listCartProducts.length}</span>
        </strong>
        <strong>
         Quantidade de produtos: <span>{getQuantityProducts()}</span>
        </strong>
        <strong>
         Total da compra{' '}
         <span>
          {getValueTotal().toLocaleString('pr-br', {
           style: 'currency',
           currency: 'BRL',
          })}
         </span>
        </strong>
        <Button
         data={{
          title: 'Comprar',
          type: 'button',
          onClick: () => navigate('/checkout'),
         }}
        />
       </div>
      </CartContainer>
     )}
    </ListProducts>
   </Content>

   <Footer />
  </Container>
 );
}
