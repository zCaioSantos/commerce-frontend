import { createContext, useState } from 'react';
import { ProdutoProps } from '../types/ProdutoProps';

export const ShopCartContext = createContext({});

interface ShopCartProviderProps {
 children: React.ReactNode;
}

function ShopCartProvider({ children }: ShopCartProviderProps) {
 const [listCartProducts, setListCartProducts] = useState<ProdutoProps[]>([]);

 return (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  <ShopCartContext.Provider value={{ listCartProducts, setListCartProducts }}>
   {children}
  </ShopCartContext.Provider>
 );
}

export default ShopCartProvider;
