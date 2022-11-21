import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ProdutosPropsToCart } from '../../types/ProdutoProps';
import { ShopCartContextData, ShopCartProviderProps } from './types';

export const ShopCartContext = createContext<ShopCartContextData>(
 {} as ShopCartContextData
);

function ShopCartProvider({ children }: ShopCartProviderProps) {
 const [listCartProducts, setListCartProducts] = useState<
  ProdutosPropsToCart[]
 >([]);

 useEffect(() => {
  const oldShopCart = window.localStorage.getItem('@ShopCart');
  if (oldShopCart) setListCartProducts(JSON.parse(oldShopCart));
 }, []);

 const onAddToCart = (produto: ProdutosPropsToCart) => {
  setListCartProducts((old) => {
   const newCart = [...old, produto];
   window.localStorage.setItem('@ShopCart', JSON.stringify(newCart));
   toast.success('Produto Acionado ao carrinho!', {
    autoClose: 1500,
   });
   return newCart;
  });
 };

 const onRemoveToCart = (id: number) => {
  const filteredProductsToCard = listCartProducts.filter(
   (produto) => produto.produto_id !== id
  );
  setListCartProducts(filteredProductsToCard);
  window.localStorage.setItem('@ShopCart', JSON.stringify(listCartProducts));
 };

 const onIncrease = (id: number) => {
  const produtos = [...listCartProducts];

  produtos.forEach((produto) => {
   if (produto.produto_id === id) {
    // eslint-disable-next-line no-param-reassign
    produto.quantidade += 1;
   }
  });

  setListCartProducts(produtos);
  window.localStorage.setItem('@ShopCart', JSON.stringify(listCartProducts));
 };

 const onDecrease = (id: number) => {
  const produtos = [...listCartProducts];

  produtos.forEach((produto) => {
   if (produto.produto_id === id) {
    if (produto.quantidade > 0) {
     // eslint-disable-next-line no-param-reassign
     produto.quantidade -= 1;
    }
   }
  });

  setListCartProducts(produtos);
  window.localStorage.setItem('@ShopCart', JSON.stringify(listCartProducts));
 };

 return (
  <ShopCartContext.Provider
   // eslint-disable-next-line react/jsx-no-constructed-context-values
   value={{
    listCartProducts,
    onAddToCart,
    onRemoveToCart,
    onDecrease,
    onIncrease,
   }}
  >
   {children}
  </ShopCartContext.Provider>
 );
}

export default ShopCartProvider;
