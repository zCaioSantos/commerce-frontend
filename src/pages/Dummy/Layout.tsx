import { Container } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <Container>
   <h1>{data.msg}</h1>
  </Container>
 );
}
