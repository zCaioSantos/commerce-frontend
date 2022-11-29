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
   let qtd = 0;

   old.forEach((produtoList) => {
    if (produtoList.id === produto.id) {
     qtd = produtoList.quantidade;
    }
   });

   const filteredProductsToCard = old.filter(
    (produtoRemove) => produtoRemove.id !== produto.id
   );

   const newCart = [
    ...filteredProductsToCard,
    { ...produto, quantidade: produto.quantidade + qtd },
   ];

   window.localStorage.setItem('@ShopCart', JSON.stringify(newCart));
   toast.success('Produto Acionado ao carrinho!', {
    autoClose: 1500,
   });

   return newCart;
  });
 };

 const onRemoveToCart = (id: number) => {
  const filteredProductsToCard = listCartProducts.filter(
   (produto) => produto.id !== id
  );
  setListCartProducts(filteredProductsToCard);
  window.localStorage.setItem(
   '@ShopCart',
   JSON.stringify(filteredProductsToCard)
  );
 };

 const onIncrease = (id: number) => {
  const produtos = [...listCartProducts];

  produtos.forEach((produto) => {
   if (produto.id === id) {
    // eslint-disable-next-line no-param-reassign
    produto.quantidade += 1;
    setListCartProducts(produtos);
    window.localStorage.setItem('@ShopCart', JSON.stringify(listCartProducts));
   }
  });
 };

 const onDecrease = (id: number) => {
  const produtos = [...listCartProducts];

  produtos.forEach((produto) => {
   if (produto.id === id) {
    if (produto.quantidade > 1) {
     // eslint-disable-next-line no-param-reassign
     produto.quantidade -= 1;
     setListCartProducts(produtos);
     window.localStorage.setItem('@ShopCart', JSON.stringify(listCartProducts));
    }
   }
  });
 };

 const getQuantityProducts = () => {
  let quantity = 0;
  listCartProducts.forEach((produtos) => {
   quantity += produtos.quantidade;
  });
  return quantity;
 };

 const getValueTotal = () => {
  let total = 0;
  listCartProducts.forEach((produtos) => {
   total += Number(produtos.preco) * produtos.quantidade;
  });
  return total;
 };

 const clearToCart = () => {
  setListCartProducts([]);
  window.localStorage.removeItem('@ShopCart');
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
    getValueTotal,
    getQuantityProducts,
    clearToCart,
   }}
  >
   {children}
  </ShopCartContext.Provider>
 );
}

export default ShopCartProvider;
