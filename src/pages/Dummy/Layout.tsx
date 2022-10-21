import { Sidebar } from '../../components/Sidebar';
import { Container } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <Container>
   <Sidebar />
   <h1>{data.msg}</h1>
  </Container>
 );
}
