import { useNavigate } from 'react-router-dom';
import { LogoCommerceSimples } from '../../assets/images';
import { SidebarItem } from '../SidebarItem';
import { LayoutProps } from './types';
import { Container, Logo } from './styles';
import { BsFillReplyFill } from 'react-icons/bs';

export function Layout({ data: { sidebarItems } }: LayoutProps) {
 const navigate = useNavigate();
 return (
  <Container>
   <div className="header">
    <Logo src={LogoCommerceSimples} alt="Logo Commerce" />
    <nav>
     {sidebarItems.map(({ id, icon, route, isActive }) => (
      <SidebarItem
       data={{
        icon,
        navigate: () => navigate(route),
        isActive,
       }}
       key={id}
      />
     ))}
    </nav>
   </div>
   <div className="footer">
    <SidebarItem
     data={{
      icon: <BsFillReplyFill size={30} />,
      navigate: () => navigate('/logout'),
      isActive: false,
     }}
    />
   </div>
  </Container>
 );
}
