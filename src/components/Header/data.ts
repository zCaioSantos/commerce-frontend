import { useActiveMenuData } from '../../services/hooks';

export const useData = () => {
 const { menu } = useActiveMenuData();
 const getActiveData = menu.find(({ isActive }) => isActive);
 const data = {
  icon: getActiveData?.icon,
  pageName: getActiveData?.name,
 };
 return { data };
};
