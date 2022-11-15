import { BsBasketFill } from 'react-icons/bs';
import { Header } from '../../components/LandingPage/Header';
import { TopHeader } from '../../components/LandingPage/TopHeader';
import { Footer } from '../../components/LandingPage/Footer';
import { LayoutProps } from './types';
import { Container, ContainerItens, Content, InfoCarro } from './styles';
import { Item } from '../../components/Basket/Item';
import { SummaryPurchase } from '../../components/Basket/SummaryPurchase';

export function Layout({ data }: LayoutProps) {
 return (
  <Container>
   <TopHeader />
   <Header />
   <InfoCarro>
    <BsBasketFill size={28} color="#F79F7C" />
    <h3>PRODUTOS E FRETE</h3>
   </InfoCarro>
   <Content>
    <ContainerItens>
     <Item />
    </ContainerItens>
    <SummaryPurchase />
   </Content>
   <Footer />
  </Container>
 );
}
