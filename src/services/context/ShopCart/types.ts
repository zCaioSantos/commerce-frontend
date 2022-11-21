import { ProdutosPropsToCart } from '../../types/ProdutoProps';

export interface ShopCartProviderProps {
 children: React.ReactNode;
}

export interface ShopCartContextData {
 listCartProducts: ProdutosPropsToCart[];
 onAddToCart: (produto: ProdutosPropsToCart) => void;
 onRemoveToCart: (id: number) => void;
 onIncrease: (id: number) => void;
 onDecrease: (id: number) => void;
}
