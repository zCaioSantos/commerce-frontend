import { useActiveMenuData } from '../../services/hooks';

export const useData = () => {
 const { menu } = useActiveMenuData();

 const data = {
  sidebarItems: menu,
 };

 return { data };
};
