import { BsFillReplyFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { LogoCommerceSimples } from '../../assets/images';
import { useAuth } from '../../services/context/Auth/hook';
import { SidebarItem } from '../SidebarItem';
import { Container, Logo } from './styles';
import { LayoutProps } from './types';

export function Layout({ data: { sidebarItems } }: LayoutProps) {
 const navigate = useNavigate();
 const { getUser } = useAuth();
 return (
  <Container>
   <div className="header">
    <Logo src={LogoCommerceSimples} alt="Logo Commerce" />
    <nav>
     {sidebarItems.map(
      ({ id, icon, route, isActive, access }) =>
       access.includes(getUser().perfil) && (
        <SidebarItem
         data={{
          icon,
          navigate: () => navigate(route),
          isActive,
         }}
         key={id}
        />
       )
     )}
    </nav>
   </div>
   <div className="footer">
    <SidebarItem
     data={{
      icon: <BsFillReplyFill size={30} />,
      navigate: () => navigate('/'),
      isActive: false,
     }}
    />
   </div>
  </Container>
 );
}
