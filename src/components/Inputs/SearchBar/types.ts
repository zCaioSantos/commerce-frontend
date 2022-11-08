export interface ControllerProps {
 data: {
  placeholder: string;
  onClick?: () => void;
  onChange?: () => void;
 };
}

export type LayoutProps = ControllerProps;
