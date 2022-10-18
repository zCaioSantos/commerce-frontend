import { useLocation } from 'react-router-dom';
import { sidebarItems } from '../mocks';

export const useActiveMenuData = () => {
 const location = useLocation();
 const menuData = sidebarItems.map((menu) => {
  const isActive = location.pathname.includes(menu.route);
  return {
   ...menu,
   isActive,
  };
 });
 return { menu: menuData };
};
