import {
 BsFillArchiveFill,
 BsFillReplyFill,
 BsPersonFill,
} from 'react-icons/bs';
import { LogoCommerceSimples } from '../../assets/images';
import { Button, Container, Logo } from './styles';

export function Layout() {
 return (
  <Container>
   <div className="header">
    <Logo src={LogoCommerceSimples} alt="Logo Commerce" />
    <nav>
     <Button>
      <BsPersonFill />
     </Button>
     <Button>
      <BsFillArchiveFill size={30} />
     </Button>
    </nav>
   </div>
   <div className="footer">
    <Button>
     <BsFillReplyFill size={30} />
    </Button>
   </div>
  </Container>
 );
}
