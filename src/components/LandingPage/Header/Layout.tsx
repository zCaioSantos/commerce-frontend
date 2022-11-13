import { BsSearch, BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Container, DIV, Nav, GroupIcon, Logo } from './styles';
import { LogoCommerceSimples } from '../../../assets/images';

export function Layout() {
 return (
  <Container>
   <Nav>
    <Logo src={LogoCommerceSimples} alt="Logo Commerce" />
    <DIV>
     <Link to="/">Home</Link>
     <a href="/">
      <p>Produtos</p>
     </a>
     <a href="/">
      <p>Pedidos</p>
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
