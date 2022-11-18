import { RingLoader } from 'react-spinners';
import { Carousel } from '../../components/LandingPage/Carousel';
import { Footer } from '../../components/LandingPage/Footer';
import { Header } from '../../components/LandingPage/Header';
import { TopHeader } from '../../components/LandingPage/TopHeader';
import { Container, ContainerLoading, Content } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <Container>
   <TopHeader />
   <Header />

   {!data.isLoading || data.isFetched ? (
    <Content>
     <Carousel data={data?.response?.content} />
    </Content>
   ) : (
    <ContainerLoading>
     <RingLoader color="#F29773" />
    </ContainerLoading>
   )}

   <Footer />
  </Container>
 );
}
