import { useContext } from 'react';
import { ShopCartContext } from '../../../services/context/ShopCart/ShopCarProvider';

import { ShopCartContextData } from '../../../services/context/ShopCart/types';
import { Layout } from './Layout';

export function Controller() {
 const { listCartProducts } = useContext<ShopCartContextData>(ShopCartContext);
 return (
  <Layout
   data={{
    listCardSize: listCartProducts.length,
   }}
  />
 );
}
