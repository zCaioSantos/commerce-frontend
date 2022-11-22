import {
 Control,
 FieldErrorsImpl,
 UseFormGetValues,
 UseFormHandleSubmit,
 UseFormRegister,
 UseFormSetValue,
} from 'react-hook-form';
import { EnderecoProps } from '../../services/types/EnderecoProps';
import { ProdutosPropsToCart } from '../../services/types/ProdutoProps';
import { ResponseProps } from '../../services/types/ResponseProps';

export interface ControllerProps {
 data: {
  hookForm: {
   control: Control<PedidoProps>;
   register: UseFormRegister<PedidoProps>;
   handleSubmit: UseFormHandleSubmit<PedidoProps>;
   errors: Partial<FieldErrorsImpl<PedidoProps>>;
   onSubmit: (data: PedidoProps) => void;
   setValue: UseFormSetValue<PedidoProps>;
   getValues: UseFormGetValues<PedidoProps>;
  };
 };
}

export interface LayoutProps extends ControllerProps {
 ListAndress: {
  response?: ResponseProps<EnderecoProps[]>;
  isFetched: boolean;
  isLoading: boolean;
 };
}

export type PedidoProps = {
 cliente_id: number;
 endereco_id: number;
 metodo_pagamento: 'CARTAO' | 'PIX' | 'BOLETO' | 'PAYPAL';
 valor_frete: number;
 lista_produtos: ProdutosPropsToCart[];
};
