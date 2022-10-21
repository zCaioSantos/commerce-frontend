import { ReactNode } from 'react';

export interface LayoutProps {
 data: {
  sidebarItems: SidebarProps[];
 };
}
export interface SidebarProps {
 id: string;
 route: string;
 icon: ReactNode;
 isActive: boolean;
}
