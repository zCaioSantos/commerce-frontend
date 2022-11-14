import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs';
import { Container, Icons } from './styles';

export function Layout() {
 return (
  <Container>
   <Icons>
    <BsTwitter color="F79F7C" size={36} />
    <BsFacebook color="F79F7C" size={36} />
    <BsTelegram color="F79F7C" size={36} />
    <BsInstagram color="F79F7C" size={36} />
   </Icons>
   <span>Siga nos também nas redes sociais</span>
  </Container>
 );
}
