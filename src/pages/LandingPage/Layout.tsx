import { BarLoader } from 'react-spinners';
import { Header } from '../../components/LandingPage/Header';
import { TopHeader } from '../../components/LandingPage/TopHeader';
import { Footer } from '../../components/LandingPage/Footer';
import { Carousel } from '../../components/LandingPage/Carousel';
import { LayoutProps } from './types';
import { Container, Content } from './styles';

export function Layout({ data }: LayoutProps) {
 return (
  <Container>
   <TopHeader />
   <Header />
   <Content>
    {!data.isLoading || data.isFetched ? (
     <Carousel data={data?.response?.content} />
    ) : (
     <BarLoader width={500} />
    )}
   </Content>
   <Footer />
  </Container>
 );
}
