export interface ControllerProps {
 data: {
  title: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
 };
}

export type LayoutProps = ControllerProps;
