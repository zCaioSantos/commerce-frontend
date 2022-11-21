import { BsCart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { LogoCommerce } from '../../../assets/images';
import { InputText } from '../../Inputs/InputText';
import {
 CartSize,
 Container,
 ContainerNavigation,
 LinkButton,
 Logo,
} from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const navigate = useNavigate();
 return (
  <Container>
   <Logo src={LogoCommerce} alt="Logo Commerce" onClick={() => navigate('/')} />
   <ContainerNavigation>
    <InputText
     data={{
      placeholder: 'Buscar Produto',
      type: 'search',
     }}
    />
    <LinkButton onClick={() => navigate('/cart')}>
     {data.listCardSize > 0 && <CartSize>{data.listCardSize}</CartSize>}
     <BsCart />
    </LinkButton>
   </ContainerNavigation>
  </Container>
 );
}
