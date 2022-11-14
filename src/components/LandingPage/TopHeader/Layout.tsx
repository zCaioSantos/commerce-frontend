import { useNavigate } from 'react-router-dom';
import { Container, LinkButton, Navigation } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const navigate = useNavigate();
 return (
  <Container>
   <Navigation>
    {data.map((link) => (
     <li key={link.route}>
      <LinkButton type="button" onClick={() => navigate(link.route)}>
       {link.title}
      </LinkButton>
     </li>
    ))}
   </Navigation>
  </Container>
 );
}
