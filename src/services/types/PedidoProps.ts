import { EnderecoProps } from './EnderecoProps';
import { ItemPedidoProps } from './ItemPedidoProps';

export interface PedidosProps {
 id: number;
 valor_total: number;
 data: string;
 cliente_id: number;
 endereco: EnderecoProps;
 status_pedido: string;
 metodo_pagamento: string;
 valor_frete: number;
 pedidos: ItemPedidoProps[];
}
