import { ReactNode } from 'react';

export interface ControlerProps {
 onClick?: () => void;
 disableButton?: boolean;
}
export interface LayoutProps {
 data: {
  icon?: ReactNode;
  pageName?: string;
 };
 onClick?: () => void;
 disableButton?: boolean;
}
