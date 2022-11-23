import { UseFormRegisterReturn } from 'react-hook-form';

export interface ControllerProps {
 data: {
  title?: string;
  placeholder?: string;
  type: InputTypes;
  getInputValue?: (e: any) => void;
  value?: string;
  register: UseFormRegisterReturn<any>;
 };
}

export type LayoutProps = ControllerProps;

export type InputTypes =
 | 'email'
 | 'hidden'
 | 'number'
 | 'password'
 | 'search'
 | 'tel'
 | 'text'
 | 'date';
