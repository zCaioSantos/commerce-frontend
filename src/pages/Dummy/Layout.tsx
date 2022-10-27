import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { FormAdmin } from '../../modules/FormAdmin';
import { Container } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <Container>
   <FormAdmin />
  </Container>
 );
}
