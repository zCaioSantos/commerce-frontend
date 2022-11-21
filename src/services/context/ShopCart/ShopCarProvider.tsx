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
    if (produtoList.produto_id === produto.produto_id) {
     qtd = produtoList.quantidade;
    }
   });

   const filteredProductsToCard = listCartProducts.filter(
    (produtoRemove) => produtoRemove.produto_id !== produto.produto_id
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
   (produto) => produto.produto_id !== id
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
   if (produto.produto_id === id) {
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
   if (produto.produto_id === id) {
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
   }}
  >
   {children}
  </ShopCartContext.Provider>
 );
}

export default ShopCartProvider;
