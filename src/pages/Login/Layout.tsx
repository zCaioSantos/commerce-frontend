import { useNavigate } from 'react-router-dom';
import { LogoCommerce } from '../../assets/images';

import { FormAuth } from '../../modules/FormAuth';
import { Container, Content } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const navigate = useNavigate();
 return (
  <Container>
   <Content>
    <img src={LogoCommerce} alt="Logo Commerce" onClick={() => navigate('/')} />
    <FormAuth data={data} />
   </Content>
  </Container>
 );
}
