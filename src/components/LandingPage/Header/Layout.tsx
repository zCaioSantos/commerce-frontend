import { Container, DIV, Nav, GroupIcon, Logo } from './styles';
import { BsSearch, BsCart } from 'react-icons/bs';
import { LogoCommerceSimples } from '../../../assets/images';

export function Layout() {
 return (
  <Container>
   <Nav>
    <Logo src={LogoCommerceSimples} alt="Logo Commerce" />
    <DIV>
     <a href="/">
      <p>HOME</p>
     </a>
     <a href="/">
      <p>PRODUTOS</p>
     </a>
     <a href="/">
      <p>PEDIDOS</p>
     </a>
    </DIV>
    <GroupIcon>
     <BsSearch size={30} />
     <BsCart size={30} />
    </GroupIcon>
   </Nav>
  </Container>
 );
}
