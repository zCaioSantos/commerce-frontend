export interface ControllerProps {
 data: {
  value: number;
  onClick: (quantidade: number) => void;
  max?: number;
 };
}

export type LayoutProps = ControllerProps;
