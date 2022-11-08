import { ReactNode } from 'react';

export interface ControlerProps {
 onClick?: () => void;
}
export interface LayoutProps {
 data: {
  icon?: ReactNode;
  pageName?: string;
 };
 onClick?: () => void;
}
