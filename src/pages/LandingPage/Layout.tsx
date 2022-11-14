import { RingLoader } from 'react-spinners';
import { Header } from '../../components/LandingPage/Header';
import { TopHeader } from '../../components/LandingPage/TopHeader';
import { Footer } from '../../components/LandingPage/Footer';
import { Carousel } from '../../components/LandingPage/Carousel';
import { LayoutProps } from './types';
import { Container, Content, ContainerLoading } from './styles';

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
