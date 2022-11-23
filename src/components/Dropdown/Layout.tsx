import {
 BsCaretDownFill,
 BsCommand,
 BsFillReplyFill,
 BsList,
 BsPersonFill,
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../services/context/Auth/hook';
import { Content, Dropdown } from './styles';

export function Layout() {
 const { getUser, onSingOut } = useAuth();
 const navigate = useNavigate();
 return (
  <Dropdown>
   <button type="button">
    <span>{getUser().nome}</span>
    <BsCaretDownFill />
   </button>
   <Content>
    <button type="button">
     <BsPersonFill />
     <span>Meu Perfil</span>
    </button>
    <button type="button">
     <BsList />
     <span>Meus Pedidos</span>
    </button>
    <button
     type="button"
     className={getUser().perfil === 'cliente' ? 'hidden' : ''}
     onClick={() =>
      navigate(
       getUser().perfil === 'admin' ? '/dashboard/users' : '/dashboard/products'
      )
     }
    >
     <BsCommand />
     <span>Dashboard</span>
    </button>
    <button type="button" onClick={() => onSingOut()}>
     <BsFillReplyFill />
     <span>Sair</span>
    </button>
   </Content>
  </Dropdown>
 );
}
