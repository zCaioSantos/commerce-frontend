import { useNavigate } from 'react-router-dom';
import { Container, Navgation } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const navigate = useNavigate();
 return (
  <Container>
   <Navgation>
    {data.map((link, index) => (
     <li key={index} onClick={() => navigate(link.route)}>
      {link.title}
     </li>
    ))}
   </Navgation>
  </Container>
 );
}
