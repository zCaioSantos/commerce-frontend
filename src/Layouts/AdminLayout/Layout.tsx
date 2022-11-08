import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Container, Main } from './styles';
import { LayoutProps } from './type';

export function Layout({ children, onClick }: LayoutProps) {
 return (
  <Container>
   <Sidebar />
   <Main>
    <Header onClick={onClick} />
    {children}
   </Main>
  </Container>
 );
}
