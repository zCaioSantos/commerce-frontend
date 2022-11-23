import { UseFormRegisterReturn } from 'react-hook-form';

export interface ControllerProps {
 data: {
  placeholder?: string;
  type: InputTypes;
  register?: UseFormRegisterReturn<any>;
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
