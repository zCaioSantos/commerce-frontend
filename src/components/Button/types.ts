export interface ControllerProps {
 data: {
  title: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  disabled?: boolean;
 };
}

export type LayoutProps = ControllerProps;
