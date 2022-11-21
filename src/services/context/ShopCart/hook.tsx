import { useContext } from 'react';
import { ShopCartContext } from './ShopCarProvider';

export const useCartShop = () => {
 const cart = useContext(ShopCartContext);
 return cart;
};
