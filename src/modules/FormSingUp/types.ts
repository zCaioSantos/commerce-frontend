import {
 FieldErrorsImpl,
 UseFormHandleSubmit,
 UseFormRegister,
} from 'react-hook-form';
import { SingUpProps } from '../../services/types/SingUpProps';

export interface ControllerProps {
 data: {
  hookForm: {
   register: UseFormRegister<SingUpProps>;
   handleSubmit: UseFormHandleSubmit<SingUpProps>;
   errors: Partial<FieldErrorsImpl<SingUpProps>>;
   onSubmit: (data: SingUpProps) => void;
   isLoading: boolean;
  };
 };
}

export type LayoutProps = ControllerProps;
