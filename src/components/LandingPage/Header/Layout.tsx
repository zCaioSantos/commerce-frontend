import { BsSearch, BsCart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Container, ContainerNavigation, LinkButton, Logo } from './styles';
import { LogoCommerceSimples } from '../../../assets/images';

export function Layout() {
 const navigate = useNavigate();
 return (
  <Container>
   <Logo
    src={LogoCommerceSimples}
    alt="Logo Commerce"
    onClick={() => navigate('/')}
   />
   <ContainerNavigation>
    <LinkButton onClick={() => navigate('/')}>
     <BsSearch />
    </LinkButton>
    <LinkButton onClick={() => navigate('/cart')}>
     <BsCart />
    </LinkButton>
   </ContainerNavigation>
  </Container>
 );
}
