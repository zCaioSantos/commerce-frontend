import {
 FieldErrorsImpl,
 UseFormHandleSubmit,
 UseFormRegister,
} from 'react-hook-form';
import { PedidoProps } from '../../modules/FormPedido/type';

export interface LayoutProps {
 data: {
  hookForm: {
   register: UseFormRegister<PedidoProps>;
   handleSubmit: UseFormHandleSubmit<PedidoProps>;
   errors: Partial<FieldErrorsImpl<PedidoProps>>;
   onSubmit: (data: PedidoProps) => void;
  };
  setFrete: (value: number) => void;
  getFrete: number;
 };
 isLoading: boolean;
}
