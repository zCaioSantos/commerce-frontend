import { ReactNode } from 'react';

export interface ControllerProps {
 data: {
  icon: ReactNode;
  navigate: () => void;
  isActive: boolean;
 };
}
export type LayoutProps = ControllerProps;
