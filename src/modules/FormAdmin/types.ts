import {
 Control,
 UseFormRegister,
 UseFormHandleSubmit,
 FieldErrorsImpl,
 UseFormSetValue,
 UseFormGetValues,
} from 'react-hook-form';
import { AdminProps } from '../../pages/Users/types';

export interface LayoutProps {
 data: {
  hookForm: {
   control: Control<AdminProps>;
   register: UseFormRegister<AdminProps>;
   handleSubmit: UseFormHandleSubmit<AdminProps>;
   errors: Partial<FieldErrorsImpl<AdminProps>>;
   onSubmit: (data: AdminProps) => void;
   setValue: UseFormSetValue<AdminProps>;
   getValues: UseFormGetValues<AdminProps>;
  };
 };
}
