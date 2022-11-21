export interface ControllerProps {
 data: {
  value: number;
  onClick: (quantidade: number) => void;
 };
}

export type LayoutProps = ControllerProps;
