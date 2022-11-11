export interface ControllerProps {
 data: {
  title?: string;
  placeholder?: string;
  type: InputTypes;
  getInputValue: (e: any) => void;
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
