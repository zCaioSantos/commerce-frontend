import { Header } from '../../components/LandingPage/Header';
import { TopHeader } from '../../components/LandingPage/TopHeader';
import { Footer } from '../../components/LandingPage/Footer';
import { LayoutProps } from './types';
import { Container } from './styles';

export function Layout({ data }: LayoutProps) {
 return (
  <Container>
   <TopHeader />
   <Header />
   
   <Footer />
  </Container>
 );
}
