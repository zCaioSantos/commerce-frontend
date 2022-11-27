import {
 FieldErrorsImpl,
 UseFormHandleSubmit,
 UseFormRegister,
} from 'react-hook-form';
import { ProfileProps } from '../../services/types/ProfileProps';

export interface ControllerProps {
 data?: ProfileProps;
}

export interface LayoutProps {
 data: {
  hookForm: {
   register: UseFormRegister<ProfileProps>;
   handleSubmit: UseFormHandleSubmit<ProfileProps>;
   errors: Partial<FieldErrorsImpl<ProfileProps>>;
   onSubmit: (data: ProfileProps) => void;
   isLoading: boolean;
  };
 };
}
