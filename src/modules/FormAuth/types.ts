import {
 Control,
 FieldErrorsImpl,
 UseFormGetValues,
 UseFormHandleSubmit,
 UseFormRegister,
 UseFormSetValue,
} from 'react-hook-form';
import { LoginProps } from '../../services/types/LoginProps';

export interface ControllerProps {
 data: {
  hookForm: {
   control: Control<LoginProps>;
   register: UseFormRegister<LoginProps>;
   handleSubmit: UseFormHandleSubmit<LoginProps>;
   errors: Partial<FieldErrorsImpl<LoginProps>>;
   onSubmit: (data: LoginProps) => void;
   setValue: UseFormSetValue<LoginProps>;
   getValues: UseFormGetValues<LoginProps>;
  };
 };
}

export type LayoutProps = ControllerProps;
