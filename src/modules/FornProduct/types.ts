import {
 Control,
 FieldErrorsImpl,
 UseFormGetValues,
 UseFormHandleSubmit,
 UseFormRegister,
 UseFormSetValue,
} from 'react-hook-form';
import { ProdutoProps } from '../../services/types/ProdutoProps';

export interface LayoutProps {
 data: {
  hookForm: {
   control: Control<ProdutoProps>;
   register: UseFormRegister<ProdutoProps>;
   handleSubmit: UseFormHandleSubmit<ProdutoProps>;
   errors: Partial<FieldErrorsImpl<ProdutoProps>>;
   onSubmit: (data: ProdutoProps) => void;
   setValue: UseFormSetValue<ProdutoProps>;
   getValues: UseFormGetValues<ProdutoProps>;
  };
 };
 onSetImg: (img: File) => void;
}
