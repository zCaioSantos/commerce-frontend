import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../services/context/Auth/hook';
import { Dropdown } from '../../Dropdown';

import { Container, LinkButton, Navigation } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const navigate = useNavigate();
 const { getUser } = useAuth();
 return (
  <Container>
   <Navigation>
    {!getUser().id &&
     data.map((link) => (
      <li key={link.route}>
       <LinkButton type="button" onClick={() => navigate(link.route)}>
        {link.title}
       </LinkButton>
      </li>
     ))}
    {getUser().id && <Dropdown />}
   </Navigation>
  </Container>
 );
}
