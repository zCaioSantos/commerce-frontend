import {
 Control,
 FieldErrorsImpl,
 UseFormGetValues,
 UseFormHandleSubmit,
 UseFormRegister,
 UseFormSetValue,
} from 'react-hook-form';
import { PedidoProps } from '../../modules/FormPedido/type';

export interface LayoutProps {
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
 isLoading: boolean;
}
