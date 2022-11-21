import { useCartShop } from '../../../services/context/ShopCart/hook';

import { Layout } from './Layout';

export function Controller() {
 const { getQuantityProducts } = useCartShop();
 return (
  <Layout
   data={{
    listCardSize: getQuantityProducts(),
   }}
  />
 );
}
