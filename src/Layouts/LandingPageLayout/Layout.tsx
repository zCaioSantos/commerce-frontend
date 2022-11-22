import { Footer } from '../../components/LandingPage/Footer';
import { Header } from '../../components/LandingPage/Header';
import { TopHeader } from '../../components/LandingPage/TopHeader';
import { Container, Content } from './styles';
import { LayoutProps } from './types';

export function Layout({ children }: LayoutProps) {
 return (
  <Container>
   <TopHeader />
   <Header />
   <Content>{children}</Content>
   <Footer />
  </Container>
 );
}
