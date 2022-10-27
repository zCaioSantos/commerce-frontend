export interface ControllerProps {
 data: {
  title?: String;
  placeholder?: string;
  type: InputTypes;
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
