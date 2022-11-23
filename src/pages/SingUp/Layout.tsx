import { useNavigate } from 'react-router-dom';
import { LogoCommerce } from '../../assets/images';
import { FormSingUp } from '../../modules/FormSingUp';
import { Container, Content } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const navigate = useNavigate();
 return (
  <Container>
   <Content>
    <img src={LogoCommerce} alt="Logo Commerce" onClick={() => navigate('/')} />
    <FormSingUp data={data} />
   </Content>
  </Container>
 );
}
