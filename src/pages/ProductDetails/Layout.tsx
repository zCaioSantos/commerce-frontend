import { BarLoader } from 'react-spinners';
import { Footer } from '../../components/LandingPage/Footer';
import { Header } from '../../components/LandingPage/Header';
import { TopHeader } from '../../components/LandingPage/TopHeader';
import { Detalis } from '../../components/ProductDetails/Details';
import { MiniCarrousel } from '../../components/ProductDetails/MiniCarrousel';
import { Container, Content, Org } from './styles';
import { LayoutProps } from './type';

export function Layout({ data }: LayoutProps) {
 return (
  <Container>
   <TopHeader />
   <Header />
   <Content>
    {!data.isLoading || data.isFetched ? (
     <Org>
      <MiniCarrousel />
      <Detalis
       data={{
        content: data.response,
        onClick: undefined,
       }}
      />
     </Org>
    ) : (
     <BarLoader />
    )}
   </Content>
   <Footer />
  </Container>
 );
}
