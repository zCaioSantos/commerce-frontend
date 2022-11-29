import { ProdutoProps } from './ProdutoProps';

export interface ItemPedidoProps {
 item_id: number;
 precoUnitario: number;
 quantidade: number;
 produto: ProdutoProps;
}
