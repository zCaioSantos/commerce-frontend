import { Table } from '../../components/Table/Table';
import { Container } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <Container>
   <FormAdmin />
  </Container>
 );
}
