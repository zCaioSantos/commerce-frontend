import { BsCart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Container, ContainerNavigation, LinkButton, Logo } from './styles';
import { LogoCommerceSimples } from '../../../assets/images';
import { InputText } from '../../Inputs/InputText';

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
    <InputText
     data={{
      placeholder: 'Buscar Produto',
      type: 'search',
     }}
    />
    <LinkButton onClick={() => navigate('/cart')}>
     <BsCart />
    </LinkButton>
   </ContainerNavigation>
  </Container>
 );
}
