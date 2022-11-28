import {
 FieldErrorsImpl,
 UseFormHandleSubmit,
 UseFormRegister,
} from 'react-hook-form';
import { ProdutoProps } from '../../services/types/ProdutoProps';

export interface ControllerProps {
 data?: {
  selectProduct?: ProdutoProps | undefined;
 };
}

export interface LayoutProps {
 data: {
  hookForm: {
   register: UseFormRegister<ProdutoProps>;
   handleSubmit: UseFormHandleSubmit<ProdutoProps>;
   errors: Partial<FieldErrorsImpl<ProdutoProps>>;
   onSubmit: (data: ProdutoProps) => void;
   isLoading: boolean;
  };
 };
 selectProduct?: ProdutoProps | undefined;
 onSetImg: (img: File) => void;
}
