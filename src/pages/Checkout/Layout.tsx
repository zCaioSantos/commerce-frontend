import { Button } from '../../components/Button';
import { CardToCart } from '../../components/Cards/CardToCart';
import { HrVertical } from '../../components/HrVertical';
import { LandingPageLayout } from '../../Layouts/LandingPageLayout';
import { FormPedido } from '../../modules/FormPedido';
import { useCartShop } from '../../services/context/ShopCart/hook';
import { Container, Info, LeftContainer, RightContainer } from './styles';
import { LayoutProps } from './types';

export function Layout({ data, isLoading }: LayoutProps) {
 const { listCartProducts, getValueTotal } = useCartShop();
 return (
  <LandingPageLayout>
   <Container>
    <LeftContainer>
     <FormPedido data={data} />
     <Info className="top">
      Valor dos Produtos: <span>R${getValueTotal()},00</span>
     </Info>
     <Info>
      Valor do Frete: <span>R$20,00</span>
     </Info>
     <Info>
      Valor total: <span>R${getValueTotal() + 20},00</span>
     </Info>
     <Button
      data={{
       title: 'Finalizar Compra',
       type: 'submit',
       disabled: isLoading,
       onClick: data.hookForm.handleSubmit(data.hookForm.onSubmit),
      }}
     />
    </LeftContainer>
    <HrVertical />
    <RightContainer>
     {listCartProducts.map((produto) => (
      <CardToCart data={produto} />
     ))}
    </RightContainer>
   </Container>
  </LandingPageLayout>
 );
}
