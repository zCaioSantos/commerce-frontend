import {
 FieldErrorsImpl,
 UseFormHandleSubmit,
 UseFormRegister,
} from 'react-hook-form';
import { RequestProps } from '../../services/types/RequestProps';

export interface ControllerProps {
 selectRequest?: RequestProps;
}

export interface LayoutProps {
 data: {
  hookForm: {
   register: UseFormRegister<RequestProps>;
   handleSubmit: UseFormHandleSubmit<RequestProps>;
   errors: Partial<FieldErrorsImpl<RequestProps>>;
   onSubmit: (data: RequestProps) => void;
   isLoading: boolean;
  };
 };
}
