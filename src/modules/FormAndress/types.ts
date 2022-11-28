import {
 FieldErrorsImpl,
 UseFormHandleSubmit,
 UseFormRegister,
} from 'react-hook-form';
import { EnderecoProps } from '../../services/types/EnderecoProps';

export interface ControllerProps {
 data?: EnderecoProps | undefined;
}

export interface LayoutProps {
 data: {
  hookForm: {
   register: UseFormRegister<EnderecoProps>;
   handleSubmit: UseFormHandleSubmit<EnderecoProps>;
   errors: Partial<FieldErrorsImpl<EnderecoProps>>;
   onSubmit: (data: EnderecoProps) => void;
   isLoading: boolean;
   isEdit: boolean;
  };
 };
}
